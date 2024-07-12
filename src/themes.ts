import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  borderHover: '1px solid blue',
  common: {
    primaryColor: '#e95420',
    primaryColorHover: '#e95420',
    primaryColorPressed: '#c24419',
    primaryColorSuppl: '#9e2f09',
  },
  Menu: {
    itemHeight: '32px',
  },
  Switch: {
    railColorActive: '#ff0000', // 设置 Switch 选中状态的轨道颜色
    railColor: '#cccccc', // 设置 Switch 未选中状态的轨道颜色
    buttonColor: '#ffffff', // 设置 Switch 按钮的颜色
    buttonBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // 设置 Switch 按钮的阴影
    hover: {
      borderColor: '#ff4d4d !important',
    },
  },
  Slider: {
    railColor: '#cccccc', // 未选中部分的轨道颜色
    fillColor: '#ff0000', // 选中部分的轨道颜色
    handleColor: '#ff0000', // 滑块颜色
  },
  Layout: { color: '#f1f5f9' },
  Select: {
    peers: {
      InternalSelection: {
        borderPrimary: '#ff0000', // 边框颜色
        borderColorHover: 'red', // 悬停时的边框颜色
      },
    },
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
      borderColorHover: 'red', // 悬停时的边框颜色
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#e95420',
    primaryColorHover: '#e95420',
    primaryColorPressed: '#c24419',
    primaryColorSuppl: '#9e2f09',
  },

  Notification: {
    color: '#333333',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#1e1e1e' },
    },
  },
  Switch: {
    railColorActive: '#e95420',
  },
  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: '#1c1c1c',
    siderColor: '#232323',
    siderBorderColor: 'transparent',
  },

  Card: {
    color: '#232323',
    borderColor: '#e95420',
  },

  Table: {
    tdColor: '#232323',
    thColor: '#353535',
  },
};
