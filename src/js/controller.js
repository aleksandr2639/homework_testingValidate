import InnFormWidget from './widget';
import DomApp  from './dom';
import paySistem from './paySistem'

export default class ControllerApp {
    build(container) {
        this.widget = new InnFormWidget();
        this.widget.bindToDOM(container);
        this.widget.drawUI()
        this.dom = new DomApp(this.widget.container, paySistem)
        this.dom.eventApp();
    }

}