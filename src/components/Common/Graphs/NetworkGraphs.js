"use client";
import React, { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import spread from "cytoscape-spread";
import { Drawer, Row, Checkbox, Col, List } from "antd";
import styles from "../../../app/component.module.scss";

cytoscape.use(spread);

const NetworkGraphs = ({
  elements = [],
  levelOptions = [],
  layoutConfig = {},
  onNodeClick = () => {},
}) => {
  const cyRef = useRef(null);
  const cyInstance = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [originalEdges, setOriginalEdges] = useState([]);
  const [visibleLevels, setVisibleLevels] = useState(
    new Set(["All", ...levelOptions])
  );

  const showDrawer = (node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
    onNodeClick(node);
  };

  const onClose = () => setDrawerOpen(false);

  const updateEdges = (cy, nodesVisibleSet, originalEdges) => {
    const newEdges = [];

    const findVisibleAncestor = (nodeId, edgeMap) => {
      let current = nodeId;
      const visited = new Set();
      while (edgeMap[current]) {
        const parent = edgeMap[current];
        if (visited.has(parent)) break;
        visited.add(parent);
        if (nodesVisibleSet.has(parent)) return parent;
        current = parent;
      }
      return null;
    };

    const edgeMap = {};
    originalEdges.forEach(({ source, target }) => {
      edgeMap[target] = source;
    });

    originalEdges.forEach(({ source, target }) => {
      if (nodesVisibleSet.has(source) && nodesVisibleSet.has(target)) {
        newEdges.push({
          group: "edges",
          data: { id: `${source}-${target}`, source, target },
        });
      } else if (!nodesVisibleSet.has(source) && nodesVisibleSet.has(target)) {
        const newSource = findVisibleAncestor(source, edgeMap);
        if (newSource && newSource !== target) {
          newEdges.push({
            group: "edges",
            data: { id: `${newSource}-${target}`, source: newSource, target },
          });
        }
      } else if (nodesVisibleSet.has(source) && !nodesVisibleSet.has(target)) {
        const newTarget = findVisibleAncestor(target, edgeMap);
        if (newTarget && newTarget !== source) {
          newEdges.push({
            group: "edges",
            data: { id: `${source}-${newTarget}`, source, target: newTarget },
          });
        }
      }
    });

    cy.edges().remove();
    cy.add(newEdges);
  };

  useEffect(() => {
    if (!cyRef.current) return;

    const cy = cytoscape({
      container: cyRef.current,
      elements,
      style: [
        {
          selector: "node",
          style: {
            width: 230,
            height: 230,
            label: "data(label)",
            "font-size": 26,
            color: "#fff",
            "text-valign": "center",
            "text-halign": "center",
            "background-color": "#333",
          },
        },
        {
          selector: "edge",
          style: {
            width: 5,
            "line-color": "#fafafa",
            "curve-style": "bezier",
            "target-arrow-color": "#fafafa",
            "target-arrow-shape": "triangle",
            label: "data(label)",
            "font-size": 16,
            "text-rotation": "autorotate",
            color: "#fff",
          },
        },
        {
          selector: 'node[level = 1]',
          style: {
            'background-color': '#00C2FF', 
         
          }
        },
        {
          selector: 'node[level = 2]',
          style: {
            'background-color': '#333333',
        
          }
        },
        {
          selector: 'node[level = 3]',
          style: {
            'background-color': '#333333', 
          
          }
        },
        {
          selector: 'node[level = 4]',
          style: {
            'background-color': '#333333', 
          
          }
        },
        {
          selector: 'node[level = 5]',
          style: {
            'background-color': '#333333', 
          
          }
        },
        {
          selector: 'node[level = "Open Ports"]',
          style: {
            'background-color': '#333333', 
          
          }
        },
        {
          selector: 'node[level = "Warnings"]',
          style: {
            'background-color': '#708090', 
         
          }
        },
        {
          selector: 'node[level = "Attacks"]',
          style: {
            'background-color': '#FF4136', 
           
          }
        },
         {
          selector: 'node[level = "Multi cloud"]',
          style: {
            'background-color': '#2683f3', 
           
          }
        },
      ],
    });

    cyInstance.current = cy;

    cy.layout({
  name: 'cose',
  animate: false,
  padding: 70,
  spacingFactor: 4, // Increase to give more space between nodes
  nodeRepulsion: 800000, // Stronger push between nodes
  idealEdgeLength: 100, // Adjust to control edge length
  edgeElasticity: 100, // How tight the edges are
  nestingFactor: 1.2,
  gravity: 89, // Adjust gravity to prevent collapsing
  numIter: 1000, // Run enough iterations to stabilize
  ...layoutConfig,
}).run();

    cy.on("tap", "node", (evt) => {
      const node = evt.target;
      showDrawer(node.data());
    });

    const rawEdges = elements
      .filter((el) => el.data?.source && el.data?.target)
      .map((el) => el.data);

    setOriginalEdges(rawEdges);

    const currentNodes = new Set(cy.nodes().map((n) => n.id()));
    setTimeout(() => {
      updateEdges(cy, currentNodes, rawEdges);
      cy.zoom(0.20);
   
    }, 0);

    return () => cy.destroy();
  }, [elements]);

  useEffect(() => {
    const cy = cyInstance.current;
    if (!cy) return;

    cy.batch(() => {
      cy.nodes().forEach((node) => {
        const lvl = node.data("level");
        const coreLevels = [1, 2, 3, 4, 5, 'Open Ports', 'Multi cloud'];
        const show =
          visibleLevels.has("All") ||
          coreLevels.includes(lvl) ||
          visibleLevels.has(lvl);
        node.style("display", show ? "element" : "none");
      });

      const currentNodes = new Set(cy.nodes(":visible").map((n) => n.id()));
      updateEdges(cy, currentNodes, originalEdges);
      // cy.fit();
      // cy.zoom(0.3);
    });
  }, [visibleLevels]);

  const handleCheckboxChange = (level, checked) => {
    const updatedLevels = new Set(visibleLevels);
    if (checked) {
      updatedLevels.add(level);
    } else {
      updatedLevels.delete(level);
      updatedLevels.delete("All");
    }

    const levels = levelOptions;
    if (levels.every((lvl) => updatedLevels.has(lvl))) {
      updatedLevels.add("All");
    }

    setVisibleLevels(updatedLevels);
  };

  const handleAllToggle = (checked) => {
    if (checked) {
      setVisibleLevels(new Set(["All", ...levelOptions]));
    } else {
      setVisibleLevels(new Set());
    }
  };

  return (
    <>
      <Row gutter={[8, 8]} style={{ paddingBottom: 12,marginTop: -37 }}>
        <Col>
          <Checkbox
            checked={visibleLevels.has("All")}
            onChange={(e) => handleAllToggle(e.target.checked)}
          >
            All
          </Checkbox>
        </Col>
        {levelOptions.map((lvl) => (
          <Col key={lvl}>
            <Checkbox
              checked={visibleLevels.has(lvl)}
              onChange={(e) => handleCheckboxChange(lvl, e.target.checked)}
            >
              {lvl}
            </Checkbox>
          </Col>
        ))}
      </Row>
      <div style={{ height: "100vh" }}>
      <div ref={cyRef} style={{ width: "100%", height: "100%" }} />
      </div>
      <Drawer
        title={selectedNode?.id || "Details"}
        closable
        onClose={onClose}
        open={drawerOpen}
        width={500}
      >
        {selectedNode && selectedNode.details ? (
          <List
            size="small"
            header={<strong>Details</strong>}
            dataSource={Object.entries(selectedNode.details)}
            renderItem={([key, value]) => (
              <List.Item className={styles.listItems}>
                <div style={{ minWidth: "200px", fontWeight: "bold" }}>
                  {key}:
                </div>
                <div style={{ minWidth: "200px", wordBreak: "break-word" }}>
                  {typeof value === "object"
                    ? JSON.stringify(value)
                    : String(value)}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <div>No details available</div>
        )}
      </Drawer>
    </>
  );
};

export default NetworkGraphs;
