"use client";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
// import * as d3 from "d3";
import { Checkbox, Space, Drawer, List, Typography, Row, Col } from "antd";
import styles from "../../app/component.module.scss";
import Title from "antd/es/skeleton/Title";

export default function ForceGraph() {
  const ref = useRef();
  const [hiddenLevels, setHiddenLevels] = useState(new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
const [dimensions, setDimensions] = useState({
  width: 0,
  height: 0,
});
 useEffect(() => {
  if (typeof window !== "undefined") {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }
}, []);

  const showDrawer = (node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const levelColors = {
    0: "#351904",
    1: "#808080",
    2: "#808080",
    Weak_Configurations: "#808080",
    Open_Ports: "#808080",
    Attacks: "#d62728",
    Warnings: "#87a8c7",
  };

  const g = d3
    .select(ref.current)
    .append("g")
  const levels = [0, 1, 2, "Weak_Configurations", "Open_Ports", "Attacks", "Warnings"];
  const levelRank = {};
levels.forEach((lvl, idx) => {
  levelRank[lvl] = idx;
});
  const nodes = [
    { id: "AWS", label: "AWS", level: 0, details: { Type: "AWS" } },
    {
      id: "Security Groups",
      label: "Security Groups",
      level: 1,
      details: {
        Resource: "Security Group",
      },
    },
    {
      id: "s3",
      label: "S3",
      level: 1,
      details: {
        Resource: "S3",
      },
    },
    {
      id: "ec2",
      label: "EC2",
      level: 1,
      details: {
        Resource: "EC2",
      },
    },
    {
      id: "lambda",
      label: "lambda",
      level: 1,
      details: {
        Resource: "lambda",
      },
    },
    {
      id: "iam",
      label: "iam",
      level: 1,
      details: {
        Resource: "iam",
      },
    },
    {
      id: "subnets",
      label: "subnets",
      level: 1,
      details: {
        Resource: "subnets",
      },
    },
    {
      id: "vpcs",
      label: "vpcs",
      level: 1,
      details: {
        Resource: "vpcs",
      },
    },
    {
      id: "sg-0ea5",
      label: "sg-0ea5",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0ea5f6ed692a818f",
        GroupId: "sg-0ea56abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "False",
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sg-0ea5f6ed692a818f",
      },
    },
    {
      id: "sg-08363",
      label: "sg-08361",
      level: 2,
      details: {
        SecurityGroupRuleId: "sgr-08363af6ed692a818f",
        GroupId: "sg-08363abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "False",
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-08363af6ed692a818f",
      },
    },
    {
      id: "sg-08364",
      label: "sg-08361",
      level: 2,
      details: {
        SecurityGroupRuleId: "sgr-08364a03de457af8",
        GroupId: "sg-08364abadff770a44c",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-08364a03de457af8",
      },
    },
    // {
    //   id: "openports-1",
    //   label: "openports",
    //   level: "Open_Ports",
    //   details: {
    //     Type: "Security Group",
    //     "<elementid>": "4:ae75adbe-1aa8",
    //     "<id>": "53",
    //     Insyance_OS: "Windows",
    //     Instance_state: "running",
    //     Instance_type: "t2.micro",
    //   },
    // },
    {
      id: "openports-5",
      label: "openports",
      level: "Open_Ports",
      details: {
        name: 'using alternative protocols to exfiltrate data',
        warning_id: '120 - 124'
      },
    },
    {
      id: "openports-6",
      label: "openports",
      level: "Open_Ports",
      details: {
        name: 'using alternative protocols to exfiltrate data',
       
      },
    },
    {
      id: "neo4j",
      label: "neo4j-de",
      level: 2,
      details: {
        bucket: "demo-neo4j-backend",
        versioning: "Enabled",
        bucket_Encryption: false,
        permission: "FULL_CONTROL",
        lifecycle_rule_name: "None",
        lifecycle_rule_status: "None",
        lifecycle_transitions: "None",
      },
    },
    {
      id: "ACLs",
      label: "ACLs",
      level: "Weak_Configurations",
      details: {
     name: 'Acquire and Compromise Infrastructure(DNS)',
     attacks_id: 'T1583'
      },
    },
    {
      id: "No Encryption",
      label: "No Encryption",
      level: "Weak_Configurations",
      details: {
       name: 'No Encryption', 
       desc: 'Data Destruction,encrypting data to make it inaccessible',
       attacks_id: 'T1485'
      },
    },
    {
      id: "No Versioning",
      label: "No Versioning",
      level: "Weak_Configurations",
      details: {
     name: 'No histroy,limited Recovery and Data Loss Risk',
   
      },
    },
    {
      id: "T1583",
      label: "T1583",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1583-T1584",
      },
    },
    {
      id: "T1485",
      label: "T1485",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1485-T1486",
      },
    },
    {
      id: "i-06dcc9",
      label: "i-06dcc9",
      level: 2,
      details: {
        id: "i-06dcc92d8c007f7",
        type: "t2.micro",
        platform: "Windows",
        state: "running",
        subnetId: "subnet-0ec35fad2f2a82bb5",
        vpcId: "vpc-0f2d098e1d0a74e93",
        securityGroupId: "sg-02db72b524062e8b1",
        securityGroupName: " demo_win_sg",
        ebsEncryption: false,
      },
    },
    {
      id: "sg_0f7de-2",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
    {
      id: "sg_0f7de-3",
      label: "sg_0f7de",
      level: 2,
      details: {
        SecurityGroupRuleId: "sg-0f7de613f2ecc194c",
        GroupId: "sg-0f7de2cd3194bfc9c0",
        GroupOwnerId: "430118819650",
        IsEgress: "True",
        IpProtocol: "-1",
        FromPort: -1,
        ToPort: -1,
        CidrIpv4: "0.0.0.0/0",
        SecurityGroupRuleArn:
          "arn:aws:ec2:ap-south-1:430118819650:security-group-rule/sgr-00394613f2ecc194c",
      },
    },
    {
      id: "openports-8",
      label: "openports",
      level: "Open_Ports",
      details: {
        name: 'using alternative protocols to exfiltrate data',
      
      },
    },
    {
      id: "openports-9",
      label: "openports",
      level: "Open_Ports",
      details: {
        name: 'using alternative protocols to exfiltrate data',
  
      },
    },
    {
      id: "techvito-user",
      label: "techvito-user",
      level: 2,
      details: {
        UserName: "techvito-user",
        CreateDate: "2024-08-29T05:40:57+00:00",
        Arn: "arn:aws:iam::430118819650:user/techvito-user",
        mfaEnabled: "True",
        AccessKeys: "AKIAWIJIUK5BHXHLBIOO",
        AccessKeyLastUsed: "2026-01-03 12:45",
        region: "ap-south-1",
        service_name: "s3",
        AttachedPolicies:
          "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
        Groups:
          "iam-full-access, techvito-developers, billing-access-read-only",
        HasConsolePassword: "True",
        Tags: {
          AKIAWIJIUK5BHXHLBIOO: "work on opentofu",
        },
        FlatTags: "AKIAWIJIUK5BHXHLBIOO=work on opentofu",
      },
    },
    {
      id: "guest-user",
      label: "guest-user",
      level: 2,
      details: {
        UserName: "guest-user",
        CreateDate: "2024-08-29T05:40:57+00:00",
        Arn: "arn:aws:iam::430118819650:user/guest-user",
        mfaEnabled: "True",
        AccessKeys: "AKIAWIJIUK5BHXHLBIOO",
        AccessKeyLastUsed: "2026-01-05 12:45",
        region: "ap-south-1",
        service_name: "s3",
        AttachedPolicies:
          "AWSKeyManagementServicePowerUser IAMUserChangePassword VPCLatticeFullAccess",
        Groups:
          "iam-full-access, techvito-developers, billing-access-read-only",
        HasConsolePassword: "True",
        Tags: {
          AKIAWIJIUK5BHXHLBIOO: "work on opentofu",
        },
        FlatTags: "AKIAWIJIUK5BHXHLBIOO=work on opentofu",
      },
    },
    {
      id: "no-mfa-2",
      label: "No MFA",
      level: "Weak_Configurations",
      details: {
     name: 'Increased Vulnerability to Unauthorized Access,Credential Stuffing and Brute Force Attacks',
     attacks_id: 'T1110.004'
      },
    },
    {
      id: "T1110-042",
      label: "T1110",
      level: "Attacks",
      details: {
        Desc: "Data Destruction,encrypting data to make it inaccessible",
        attacks_id: "T1110",
      },
    },
    {
      id: "120",
      label: "120",
      level: "Warnings",
      details: {
        Desc: "using alternative protocols to exfiltrate data",
        elementId: "4:ae75adbe-1aa8-4903-8979-e6c0006423da:120",
      },
    },
    {
      id: "124",
      label: "124",
      level: "Warnings",
      details: {
        Desc: "using alternative protocols to exfiltrate data",
        elementId: "4:ae75adbe-1aa8-4903-8979-e6c0006423da:124",
      },
    },
  ];

  const links = [
    { source: "AWS", target: "Security Groups", label: "Has_Resource" },
    { source: "AWS", target: "s3", label: "Has_Resource" },
    { source: "AWS", target: "ec2", label: "Has_Resource" },
    { source: "AWS", target: "lambda", label: "Has_Resource" },
    { source: "AWS", target: "iam", label: "Has_Resource" },
    { source: "AWS", target: "subnets", label: "Has_Resource" },
    { source: "AWS", target: "vpcs", label: "Has_Resource" },
    { source: "sg-0ea5", target: "Security Groups", label: "Has_sec_grps" },
    { source: "sg-08363", target: "Security Groups", label: "Has_sec_grps" },
    { source: "sg-08364", target: "Security Groups", label: "Has_sec_grps" },
    // { source: "openports-1", target: "sg-0ea5", label: "Good_configs" },
    { source: "openports-5", target: "sg-08363", label: "No_proper_firewalls" },
    { source: "openports-6", target: "sg-08364", label: "No_proper_firewalls" },
    { source: "s3", target: "neo4j", label: "Has_buckets" },
    { source: "ACLs", target: "neo4j", label: "No_proper_ACLs" },
    { source: "No Encryption", target: "neo4j", label: "No_Encryption" },
    { source: "No Versioning", target: "neo4j", label: "No_Versioning" },
    { source: "T1583", target: "ACLs", label: "leads_to" },
    { source: "T1485", target: "No Encryption", label: "leads_to" },
    { source: "ec2", target: "i-06dcc9", label: "has_instances" },
    { source: "i-06dcc9", target: "sg_0f7de-2", label: "has_sec_group_rules" },
    { source: "i-06dcc9", target: "sg_0f7de-3", label: "has_sec_group_rules" },
    {
      source: "openports-8",
      target: "sg_0f7de-2",
      label: "No_proper_firewalls",
    },
    {
      source: "openports-9",
      target: "sg_0f7de-3",
      label: "No_proper_firewalls",
    },
    { source: "iam", target: "techvito-user", label: "has_iam_users" },
    { source: "iam", target: "guest-user", label: "has_iam_users" },
    { source: "no-mfa-2", target: "guest-user", label: "No_MFA_enabled" },
    { source: "T1110-042", target: "no-mfa-2", label: "leads_to" },
    { source: "120", target: "openports-5", label: "leads_to" },
    { source: "124", target: "openports-5", label: "leads_to" },


  ];

  const sourceToParentMap = {};
  links.forEach(({ source, target }) => {
    sourceToParentMap[target] = source;
  });

  const simulation = useRef();
  const zoomRef = useRef(d3.zoomIdentity);
  
  useEffect(() => {
    const svg = d3.select(ref.current);

    
    svg.selectAll("*").remove();
    svg
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const container = ref.current;
    const { width, height } = container.getBoundingClientRect();
    svg.attr("width", width).attr("height", height);
    const zoomContainer = svg.append("g").attr("class", "zoom-container");
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));
    const filteredNodes = nodes.filter((n) => !hiddenLevels.has(n.level));
    const filteredNodeIds = new Set(filteredNodes.map((n) => n.id));

    function findVisibleAncestor(sourceId) {
      let parentId = sourceToParentMap[sourceId];
      while (parentId && hiddenLevels.has(nodeMap.get(parentId)?.level)) {
        parentId = sourceToParentMap[parentId];
      }
      return parentId;
    }

    const filteredLinks = [];
    links.forEach((link) => {
      const targetHidden = hiddenLevels.has(nodeMap.get(link.target)?.level);
      const sourceHidden = hiddenLevels.has(nodeMap.get(link.source)?.level);

      if (!targetHidden && !sourceHidden) {
        filteredLinks.push(link);
      } else if (!targetHidden && sourceHidden) {
        const newSource = findVisibleAncestor(link.source);
        if (newSource)
          filteredLinks.push({ source: newSource, target: link.target });
      }
    });
    // Marker for arrows
    svg.append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 30)
      .attr("refY", 0)
      .attr("orient", "auto")
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#fff");
      const oldNodePositions = new Map();
      simulation.current?.nodes().forEach(node => {
        oldNodePositions.set(node.id, { x: node.x, y: node.y });
      });
      
      filteredNodes.forEach(d => {
        const oldPos = oldNodePositions.get(d.id);
        if (oldPos) {
          d.x = oldPos.x;
          d.y = oldPos.y;
        } else {
          d.x = undefined;
          d.y = undefined;
        }
        d.vx = undefined;
        d.vy = undefined;
        d.fx = null;
        d.fy = null;
      });
      if (!simulation.current) {
        simulation.current = d3
          .forceSimulation(filteredNodes)
          .force(
            "link",
            d3.forceLink(filteredLinks)
              .id((d) => d.id)
              .distance((d) => {
                const childCount = links.filter(link => link.source === d.source.id).length;
                return 200 + childCount * 40; 
              })
            
              .strength(0.8)
          )
          .force("charge", d3.forceManyBody().strength(-700))
          .force("center", d3.forceCenter(width / 2, height / 2))
          .force("collision", d3.forceCollide().radius(35));
      } else {
        simulation.current.nodes(filteredNodes);
        simulation.current.force("link").links(filteredLinks);
      }
      
      simulation.current.alpha(1).restart();
      for (let i = 0; i < 400; i++) {
        simulation.current.tick(); 
      }
    const link = zoomContainer
    .append("g")
    .attr("stroke", "#aaa")
    .selectAll("line")
    .data(filteredLinks)
    .join("line")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrowhead)");
      

    const node = zoomContainer
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(filteredNodes)
      .join("circle")
      .attr("r", 50)
      .attr("fill", (d) => levelColors[d.level] || "#ccc")
      .call(drag(simulation.current))
      .style("cursor", "pointer")
      .on("click", (event, d) => showDrawer(d)); 
      node.append("title")
  .text(d => d.label);

    const label = zoomContainer
      .append("g")
      .selectAll("text")
      .data(filteredNodes)
      .join("text")
      .text(d => d.label)
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .call(drag(simulation.current))
      .attr("fill", "#fff")
      .style("cursor", "pointer")
      .on("click", (event, d) => showDrawer(d)); 
      node.append("title")
  .text(d => d.label);

    const linkLabel = zoomContainer
      .append("g")
      .attr("class", "link-labels")
      .selectAll("text.link-label")
      .data(filteredLinks)
      .join("text")
      .attr("class", "link-label")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .attr("dy", -10)
      .text((d) => d.label)
      .attr("fill", "#fff");

    simulation.current.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      label.attr("x", (d) => d.x).attr("y", (d) => d.y);

      linkLabel
        .attr("x", (d) => (d.source.x + d.target.x) / 2)
        .attr("y", (d) => (d.source.y + d.target.y) / 2);

    });

    function drag(simulation) {
      return d3
        .drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.8).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        });
    }
    
    const zoom = d3.zoom().on("zoom", (event) => {
      svg.select("g.zoom-container").attr("transform", event.transform);
      zoomRef.current = event.transform;
    });
    svg.call(zoom).call(zoom.transform, zoomRef.current);
  }, [hiddenLevels]);

  function zoomBy(scaleFactor) {
    const svgEl = d3.select(ref.current);
    zoomRef.current = zoomRef.current.scale(scaleFactor);
    svgEl
      .transition()
      .duration(500)
      .call(
        d3.zoom().on("zoom", (event) => {
          svgEl.select("g.zoom-container").attr("transform", event.transform);
          zoomRef.current = event.transform;
        }).transform,
        zoomRef.current
      );
  }


  const toggleLevels = levels.filter((lvl) => ![0, 1, 2, 3].includes(lvl));
  const visibleLevels = toggleLevels.filter((lvl) => !hiddenLevels.has(lvl));
  const isAllChecked = visibleLevels.length === toggleLevels.length;
  const isIndeterminate = visibleLevels.length > 0 && !isAllChecked;

  return (
    <>
     <div>
        <Row justify="space-between" align="middle" style={{ padding: "10px" }}>
          <Col>
            <Space wrap>
              <Checkbox
                className={styles.checkboxgrps}
                indeterminate={isIndeterminate}
                checked={isAllChecked}
                onChange={(e) => {
                  if (e.target.checked) {
                    setHiddenLevels(new Set());
                  } else {
                    setHiddenLevels(new Set(toggleLevels));
                  }
                }}
              >
                All
              </Checkbox>

              <Checkbox.Group
                className={styles.checkboxgrps}
                options={toggleLevels.map((lvl) => ({
                  label: ` ${lvl}`,
                  value: lvl,
                }))}
                value={visibleLevels}
                onChange={(checkedValues) => {
                  const newHidden = new Set(
                    toggleLevels.filter((lvl) => !checkedValues.includes(lvl))
                  );
                  setHiddenLevels(newHidden);
                }}
              />
            </Space>
          </Col>

          <Col>
            <Space>
              <PlusOutlined
                className={styles.graphsPan}
                onClick={() => zoomBy(1.2)}
              />
              <MinusOutlined
                className={styles.graphsPan}
                onClick={() => zoomBy(0.8)}
              />
            </Space>
          </Col>
        </Row>

        <div style={{ width: "100%", height: "120vh" }}>
          <svg ref={ref} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <Drawer
        title={
          selectedNode ? (
            <div
              style={{
                backgroundColor: levelColors[selectedNode.level] || "#ffffff",
                padding: "8px 16px",
                borderRadius: "10rem",
                width: "fit-content",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {selectedNode.label}
            </div>
          ) : (
            "Details"
          )
        }
        closable={true}
        onClose={onClose}
        open={drawerOpen}
        width={500}
      >
        {selectedNode && selectedNode.details ? (
          <div>
            <Typography>
              <Title level={4}>{selectedNode.label}</Title>
            </Typography>
            <List
              size="small"
              header={<strong>Details</strong>}
              dataSource={Object.entries(selectedNode.details)}
              renderItem={([key, value]) => (
                <List.Item className={styles.listItems}>
                <div style={{ minWidth: "200px", fontWeight: "bold" }}>{key}:</div>
                <div style={{ minWidth: "200px", wordBreak: "break-all"}}>
                  {typeof value === "object" && value !== null
                    ? JSON.stringify(value)
                    : String(value)}
                </div>
              </List.Item>
              )}
            />
          </div>
        ) : (
          <div>No details available</div>
        )}
      </Drawer>
    </>
  );
}
