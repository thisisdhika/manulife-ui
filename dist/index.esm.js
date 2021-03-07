export { default as Accordion } from 'react-bootstrap/Accordion';
export { default as AccordionContext } from 'react-bootstrap/AccordionContext';
export { default as AccordionCollapse } from 'react-bootstrap/AccordionCollapse';
export { default as AccordionToggle, useAccordionToggle } from 'react-bootstrap/AccordionToggle';
export { default as Alert } from 'react-bootstrap/Alert';
export { default as Badge } from 'react-bootstrap/Badge';
export { default as Breadcrumb } from 'react-bootstrap/Breadcrumb';
export { default as BreadcrumbItem } from 'react-bootstrap/BreadcrumbItem';
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
export { default as Card } from 'react-bootstrap/Card';
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as Carousel } from 'react-bootstrap/Carousel';
export { default as CarouselItem } from 'react-bootstrap/CarouselItem';
export { default as CloseButton } from 'react-bootstrap/CloseButton';
export { default as Col } from 'react-bootstrap/Col';
export { default as Collapse } from 'react-bootstrap/Collapse';
export { default as Dropdown } from 'react-bootstrap/Dropdown';
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as Fade } from 'react-bootstrap/Fade';
export { default as Form } from 'react-bootstrap/Form';
export { default as FormControl } from 'react-bootstrap/FormControl';
export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as FormGroup } from 'react-bootstrap/FormGroup';
export { default as FormLabel } from 'react-bootstrap/FormLabel';
export { default as FormText } from 'react-bootstrap/FormText';
export { default as Container } from 'react-bootstrap/Container';
export { default as Image } from 'react-bootstrap/Image';
export { default as Figure } from 'react-bootstrap/Figure';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
export { default as Jumbotron } from 'react-bootstrap/Jumbotron';
export { default as ListGroup } from 'react-bootstrap/ListGroup';
export { default as ListGroupItem } from 'react-bootstrap/ListGroupItem';
export { default as Media } from 'react-bootstrap/Media';
export { default as Modal } from 'react-bootstrap/Modal';
export { default as ModalBody } from 'react-bootstrap/ModalBody';
export { default as ModalDialog } from 'react-bootstrap/ModalDialog';
export { default as ModalFooter } from 'react-bootstrap/ModalFooter';
export { default as ModalTitle } from 'react-bootstrap/ModalTitle';
export { default as Nav } from 'react-bootstrap/Nav';
export { default as Navbar } from 'react-bootstrap/Navbar';
export { default as NavbarBrand } from 'react-bootstrap/NavbarBrand';
export { default as NavDropdown } from 'react-bootstrap/NavDropdown';
export { default as NavItem } from 'react-bootstrap/NavItem';
export { default as NavLink } from 'react-bootstrap/NavLink';
export { default as Overlay } from 'react-bootstrap/Overlay';
export { default as OverlayTrigger } from 'react-bootstrap/OverlayTrigger';
export { default as PageItem } from 'react-bootstrap/PageItem';
export { default as Pagination } from 'react-bootstrap/Pagination';
export { default as Popover } from 'react-bootstrap/Popover';
export { default as PopoverTitle } from 'react-bootstrap/PopoverTitle';
export { default as PopoverContent } from 'react-bootstrap/PopoverContent';
export { default as ProgressBar } from 'react-bootstrap/ProgressBar';
export { default as ResponsiveEmbed } from 'react-bootstrap/ResponsiveEmbed';
export { default as Row } from 'react-bootstrap/Row';
export { default as SafeAnchor } from 'react-bootstrap/SafeAnchor';
export { default as Spinner } from 'react-bootstrap/Spinner';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
export { default as Tab } from 'react-bootstrap/Tab';
export { default as TabContainer } from 'react-bootstrap/TabContainer';
export { default as TabContent } from 'react-bootstrap/TabContent';
export { default as Table } from 'react-bootstrap/Table';
export { default as TabPane } from 'react-bootstrap/TabPane';
export { default as Tabs } from 'react-bootstrap/Tabs';
export { default as ThemeProvider } from 'react-bootstrap/ThemeProvider';
export { default as Toast } from 'react-bootstrap/Toast';
export { default as ToastBody } from 'react-bootstrap/ToastBody';
export { default as ToastHeader } from 'react-bootstrap/ToastHeader';
export { default as ToggleButton } from 'react-bootstrap/ToggleButton';
export { default as ToggleButtonGroup } from 'react-bootstrap/ToggleButtonGroup';
export { default as Tooltip } from 'react-bootstrap/Tooltip';
import React from 'react';
import { Button as Button$1 } from 'react-bootstrap';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
      e.setAttribute(t[n], r.attributes[t[n]]);
    }
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = ".index_module_wrapper__8af55d16 {\n  background: #000;\n  color: white; }\n";
var modules_b938fdf0 = {"wrapper":"index_module_wrapper__8af55d16"};
n(css,{});

var Button = function Button(_ref) {
  var restProps = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Button$1, _extends({}, restProps, {
    className: modules_b938fdf0.wrapper
  }));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
