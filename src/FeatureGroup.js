import React, { PropTypes } from 'react';
import { featureGroup } from 'leaflet';

import PopupContainer from './PopupContainer';

export default class FeatureGroup extends PopupContainer {
  componentWillMount() {
    const {
      map,
      group,
      ...props} = this.props;
    this.leafletElement = featureGroup();
  }

  render() {
    const children = this.getClonedChildrenWithMap({
      popupContainer: this.leafletElement,
      group: this.leafletElement
    });
    return <div style={{display: "none"}}>{children}</div>;
  }
}
