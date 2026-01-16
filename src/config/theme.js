// theme.js

export const darkTheme = {
    token: {
      colorPrimary: '#1A1A1A',
      colorBackground: '#121212',
      colorText: '#ADADAD',
      fontSizeHeading4: 20,
      colorTextHeading: '#FAFAFA',
      marginBottom: '0px'
      // fontSize: 16,  
    },
    components: {
      Table: {
        colorText: '#fefefec7',             
        colorTextHeading: '#fafafa',         
      },
      Form: {
        labelColor: '#fafafa',        
        labelFontSize: 18,            
        labelFontWeight: 500,        
      },
      Select: {
        colorBgContainer: '#202020',        
        colorText: '#FFFFFF',                
        colorBorder: '#4C4C4C',              
        borderRadius: 4,                    
        fontSize: 18,                       
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        optionSelectedBg: '#333333',         
        optionSelectedColor: '#FFFFFF',      
        optionActiveBg: '#2A2A2A',          
        colorBgElevated: '#202020',          
      },
      Radio: {
        colorPrimary: '#00c2ff',               
        colorBorder: '#00c2ff',                
        dotSize: 12,                          
        controlHeight: 22,                      
        borderRadius: 100,                      
      },
      Checkbox: {
        colorPrimary: '#00c2ff',               
        colorBorder: '#ADADAD',                
        borderRadius: 8,   
        colorText: '#fefefec7',
        fontSize: 22,
        fontFamily: "'Plus Jakarta Sans', sans-serif",                
               
      },
      Card: {
        bodyPadding: 13,
        borderRadiusLG: 8,
        colorBorderSecondary: '#6b6b6b',
        lineWidth: 1,
        lineType: 'solid',
        colorBgContainer: 'transparent',
        actionsLiMargin: '15px 0',
      
        marginTop: 16, 
        marginBottom: 16,
        
      },
      Typography: {
        // Heading styles
        colorTextHeading: '#FAFAFA',    
        fontSizeHeading3: 22,           
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        // Paragraph and other text styles
        colorText: '#fefefec7',   
        // colorLink: 'red'    

      },
      Drawer: {
        colorBgElevated: '#202020', 
        colorIcon: '#fafafa',
      },
      List: {
        itemPaddingSM: '8px 5px',
        fontSize:16,
        descriptionFontSize:20,
        fontFamily: "'Plus Jakarta Sans', sans-serif",  
        colorBorder: '#eee',
      },
      Menu: {
        itemPaddingInline: 24,
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontSize: 22,
        iconMarginInlineEnd: 8,
        itemPaddingBlock: 22, 
      },
      Tabs: {
        itemColor: "#fefefec7",
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontSize: 18,
        itemHoverColor: "#fafafa",
        itemSelectedColor: '#fafafa',
        horizontalItemPadding: '12px 12px',
        horizontalItemMargin: '12px 0px'
      },
      Dropdown: {
        colorBgElevated: '#060606',
        boxShadowSecondary: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        colorText: '#fefefec7',
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontSize: 16,
      },
    },
  };
  
  
export const lightTheme = {
  token: {
    colorPrimary: '#1890ff',
    colorBackground: '#ffffff',
    colorText: '#000000',
  
  },
  components: {
    Table: {
      colorText: '#000000',             
      colorTextHeading: '#202020',         
    },
}
};
