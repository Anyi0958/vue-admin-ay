import Vue from "vue";
import setting from "@/config/settings";
import {
  Affix,
  Alert,
  Anchor,
  AnchorLink,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  circle,
  Col,
  Collapse,
  ColorPicker,
  Content,
  Divider,
  DatePicker,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  // ListItem,
  // ListItemMeta,
  LoadingBar,
  Menu,
  Modal,
  MenuGroup,
  MenuItem,
  Message,
  Sider,
  Submenu,
  Notice,
  Option,
  OptionGroup,
  Page,
  Panel,
  Poptip,
  Progress,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Split,
  Step,
  Steps,
  Switch,
  Table,
  Tabs,
  TabPane,
  Tag,
  Time,
  Timeline,
  TimelineItem,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload,
} from "view-design";

import "view-design/dist/styles/iview.css";
import "./iview.less";

Vue.component("i-affix", Affix);
Vue.component("i-alert", Alert);
Vue.component("i-anchor", Anchor);
Vue.component("i-anchor-link", AnchorLink);
Vue.component("i-auto-complete", AutoComplete);
Vue.component("i-avatar", Avatar);
Vue.component("i-back-top", BackTop);
Vue.component("i-badge", Badge);
Vue.component("i-breadcrumb", Breadcrumb);
Vue.component("i-breadcrumb-item", BreadcrumbItem);
Vue.component("i-button", Button);
Vue.component("i-button-group", ButtonGroup);
Vue.component("i-card", Card);
Vue.component("i-carousel", Carousel);
Vue.component("i-carousel-item", CarouselItem);
Vue.component("i-cascader", Cascader);
Vue.component("i-cell", Cell);
Vue.component("i-cell-group", CellGroup);
Vue.component("i-checkbox", Checkbox);
Vue.component("i-checkbox-group", CheckboxGroup);
Vue.component("i-circle", circle);
Vue.component("i-col", Col);
Vue.component("i-collapse", Collapse);
Vue.component("i-color-picker", ColorPicker);
Vue.component("i-content", Content);
Vue.component("i-divider", Divider);
Vue.component("i-date-picker", DatePicker);
Vue.component("i-drawer", Drawer);
Vue.component("i-dropdown", Dropdown);
Vue.component("i-dropdown-item", DropdownItem);
Vue.component("i-dropdown-menu", DropdownMenu);
Vue.component("i-footer", Footer);
Vue.component("i-form", Form);
Vue.component("i-form-item", FormItem);
Vue.component("i-header", Header);
Vue.component("i-icon", Icon);
Vue.component("i-input", Input);
Vue.component("i-input-number", InputNumber);
Vue.component("i-layout", Layout);
Vue.component("i-list", List);
// Vue.component("i-list-item", ListItem);
// Vue.component("i-list-item-meta", ListItemMeta);
Vue.component("i-menu", Menu);
Vue.component("i-menu-group", MenuGroup);
Vue.component("i-menu-item", MenuItem);
Vue.component("i-sider", Sider);
Vue.component("i-submenu", Submenu);
Vue.component("i-modal", Modal);
Vue.component("i-option", Option);
Vue.component("i-option-group", OptionGroup);
Vue.component("i-page", Page);
Vue.component("i-panel", Panel);
Vue.component("i-poptip", Poptip);
Vue.component("i-progress", Progress);
Vue.component("i-radio", Radio);
Vue.component("i-radio-group", RadioGroup);
Vue.component("i-rate", Rate);
Vue.component("i-row", Row);
Vue.component("i-select", Select);
Vue.component("i-slider", Slider);
Vue.component("i-spin", Spin);
Vue.component("i-split", Split);
Vue.component("i-step", Step);
Vue.component("i-steps", Steps);
Vue.component("i-switch", Switch);
Vue.component("i-table", Table);
Vue.component("i-tabs", Tabs);
Vue.component("i-tab-pane", TabPane);
Vue.component("i-tag", Tag);
Vue.component("i-time", Time);
Vue.component("i-timeline", Timeline);
Vue.component("i-timeline-item", TimelineItem);
Vue.component("i-time-picker", TimePicker);
Vue.component("i-tooltip", Tooltip);
Vue.component("i-transfer", Transfer);
Vue.component("i-tree", Tree);
Vue.component("i-upload", Upload);

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;

Vue.prototype.$IVIEW = {
  transfer: false,
  size: setting.uiSize,
  capture: false,
  select: {
    // Select 下拉箭头图标
    arrow: "",
    // Select 自定义下拉箭头图标
    customArrow: "",
    // Select 下拉箭头尺寸
    arrowSize: "",
  },
  cell: {
    // Cell 下拉箭头图标
    arrow: "",
    // Cell 自定义下拉箭头图标
    customArrow: "",
    // Cell 下拉箭头尺寸
    arrowSize: "",
  },
  menu: {
    // Menu 下拉箭头图标
    arrow: "",
    // Menu 自定义下拉箭头图标
    customArrow: "",
    // Menu 下拉箭头尺寸
    arrowSize: "",
  },
  tree: {
    // Tree 下拉箭头图标
    arrow: "",
    // Tree 自定义下拉箭头图标
    customArrow: "",
    // Tree 下拉箭头尺寸
    arrowSize: "",
  },
  cascader: {
    // Cascader 下拉箭头图标
    arrow: "",
    // Cascader 自定义下拉箭头图标
    customArrow: "",
    // Cascader 下拉箭头尺寸
    arrowSize: "",
    // 右侧箭头图标
    itemArrow: "",
    // 自定义右侧箭头图标
    customItemArrow: "",
    // 右侧箭头尺寸
    itemArrowSize: "",
  },
  colorPicker: {
    // ColorPicker  下拉箭头图标
    arrow: "",
    // ColorPicker  自定义下拉箭头图标
    customArrow: "",
    // ColorPicker  下拉箭头尺寸
    arrowSize: "",
  },
  datePicker: {
    // DatePicker 日期图标
    icon: "",
    // DatePicker 自定义日期图标
    customIcon: "",
    // DatePicker 日期图标尺寸
    iconSize: "",
  },
  timePicker: {
    // TimePicker 时间图标
    icon: "",
    // TimePicker 自定义时间图标
    customIcon: "",
    // TimePicker 时间图标尺寸
    iconSize: "",
  },
  tabs: {
    // Tabs 关闭图标
    closeIcon: "",
    // Tabs 自定义关闭图标
    customCloseIcon: "",
    // Tabs 关闭图标尺寸
    closeIconSize: "",
  },

  modal: {
    // Modal 的 maskClosable 属性
    maskClosable: "",
  },
};
