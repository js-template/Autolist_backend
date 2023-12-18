import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBannerOne extends Schema.Component {
  collectionName: 'components_banner_banner_ones';
  info: {
    displayName: 'BannerOne';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Component<'component.image'>;
    Description: Attribute.Text;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
    icon: 'paperPlane';
  };
  attributes: {
    Image: Attribute.Media;
    Alt: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Link: Attribute.String;
    Type: Attribute.Enumeration<['External', 'Internal']>;
    Target: Attribute.Enumeration<['_blank', '_self']>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_menu_headers';
  info: {
    displayName: 'Menu';
    icon: 'layer';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    Link: Attribute.String;
  };
}

export interface HeaderLogo extends Schema.Component {
  collectionName: 'components_header_logos';
  info: {
    displayName: 'Logo';
    icon: 'chartBubble';
  };
  attributes: {
    Logo: Attribute.Media;
  };
}

export interface HeaderTopbar extends Schema.Component {
  collectionName: 'components_header_topbars';
  info: {
    displayName: 'Topbar';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    Announcement: Attribute.String;
    menu: Attribute.Component<'component.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner-one': BannerBannerOne;
      'component.image': ComponentImage;
      'component.link': ComponentLink;
      'header.header': HeaderHeader;
      'header.logo': HeaderLogo;
      'header.topbar': HeaderTopbar;
    }
  }
}
