import backToTop from "./backToTop.js";
import ClickToCopy from "./clickToCopy.js";
import Nav from "./nav.js";
import Flyout from "./flyout.js";


backToTop();
new Nav();
document
  .querySelectorAll("[data-flyout]")
  .forEach((component) => new Flyout(component));
document
  .querySelectorAll("[data-click-to-copy]")
  .forEach((component) => new ClickToCopy(component));
