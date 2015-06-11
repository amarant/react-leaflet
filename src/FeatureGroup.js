import { PropTypes } from 'react';
import { featureGroup } from 'leaflet';

import PopupContainer from './PopupContainer';

export default class FeatureGroup extends PopupContainer {
  static propTypes = {
    layers: PropTypes.array.isRequired
  };

  componentWillMount() {
    const {
      map,
      group,
      ...props} = this.props;
    this.leafletElement = Leaflet.featureGroup();
  }

  render() {
    const children = this.getClonedChildrenWithMap({
      popupContainer: this.leafletElement,
      group: this.leafletElement
    });
    return <div style={{display: "none"}}>{children}</div>;
  }
}
