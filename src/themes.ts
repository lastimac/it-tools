import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#e95420',
    primaryColorHover: '#ffa98b',
    primaryColorPressed: '#c24419',
    primaryColorSuppl: '#9e2f09',
  },
  Menu: {
    itemHeight: '32px',
  },
  Button: {

  },
  Slider: {
    railColor: '#cccccc', // 未选中部分的轨道颜色
    fillColor: '#e95420', // 选中部分的轨道颜色
    handleColor: '#ffa98b', // 滑块颜色
  },
  Layout: { color: '#f1f5f9' },
  Select: {
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
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
