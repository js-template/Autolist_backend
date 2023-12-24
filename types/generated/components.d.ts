import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBannerOne extends Schema.Component {
  collectionName: 'components_banner_banner_ones';
  info: {
    displayName: 'BannerOne';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Component<'component.image'>;
  };
}

export interface BlockAdCard extends Schema.Component {
  collectionName: 'components_ads_ad_cards';
  info: {
    displayName: 'AdCard';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ShowAds: Attribute.Relation<
      'block.ad-card',
      'oneToMany',
      'api::manage-ad.manage-ad'
    >;
    Button: Attribute.Component<'component.link'>;
  };
}

export interface BlockCategoryCard extends Schema.Component {
  collectionName: 'components_ads_category_cards';
  info: {
    displayName: 'CategoryCard';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Categories: Attribute.Relation<
      'block.category-card',
      'oneToMany',
      'api::ads-category.ads-category'
    >;
    Button: Attribute.Component<'component.link'>;
  };
}

export interface BlockLocationCard extends Schema.Component {
  collectionName: 'components_block_location_cards';
  info: {
    displayName: 'LocationCard';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Location: Attribute.JSON &
      Attribute.CustomField<'plugin::google-maps.location-picker'>;
    Button: Attribute.Component<'component.link'>;
  };
}

export interface BlockReviewCard extends Schema.Component {
  collectionName: 'components_block_review_cards';
  info: {
    displayName: 'ReviewCard';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.Component<'component.link'>;
    Reviews: Attribute.Component<'component.icon-box', true>;
  };
}

export interface ComponentIconBox extends Schema.Component {
  collectionName: 'components_component_icon_boxes';
  info: {
    displayName: 'IconBox';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Media;
    Link: Attribute.String;
    LinkType: Attribute.Enumeration<['Internal', 'External']>;
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

export interface ComponentSocialLink extends Schema.Component {
  collectionName: 'components_component_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
    Icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface ComponentTitles extends Schema.Component {
  collectionName: 'components_component_titles';
  info: {
    displayName: 'Titles';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.Component<'component.link'>;
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
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    URL: Attribute.String;
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

export interface WidgetFooterOne extends Schema.Component {
  collectionName: 'components_widget_footer_ones';
  info: {
    displayName: 'FooterOne';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Logo: Attribute.Media;
    SocialLink: Attribute.Component<'component.social-link', true>;
  };
}

export interface WidgetFooterTwo extends Schema.Component {
  collectionName: 'components_widget_footer_twos';
  info: {
    displayName: 'FooterTwo';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    FooterMenu: Attribute.Component<'component.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner-one': BannerBannerOne;
      'block.ad-card': BlockAdCard;
      'block.category-card': BlockCategoryCard;
      'block.location-card': BlockLocationCard;
      'block.review-card': BlockReviewCard;
      'component.icon-box': ComponentIconBox;
      'component.image': ComponentImage;
      'component.link': ComponentLink;
      'component.social-link': ComponentSocialLink;
      'component.titles': ComponentTitles;
      'header.header': HeaderHeader;
      'header.logo': HeaderLogo;
      'header.topbar': HeaderTopbar;
      'widget.footer-one': WidgetFooterOne;
      'widget.footer-two': WidgetFooterTwo;
    }
  }
}
