import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerBannerOne extends Schema.Component {
  collectionName: 'components_banner_banner_ones';
  info: {
    displayName: 'BannerOne';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    search: Attribute.Component<'forms.seaech-form'>;
    image: Attribute.Media;
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
    title: Attribute.String;
    description: Attribute.Text;
    showAds: Attribute.Relation<
      'block.ad-card',
      'oneToMany',
      'api::manage-ad.manage-ad'
    >;
    button: Attribute.Component<'component.link'>;
  };
}

export interface BlockBlogCard extends Schema.Component {
  collectionName: 'components_block_blog_cards';
  info: {
    displayName: 'BlogCard';
    icon: 'collapse';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    posts: Attribute.Relation<'block.blog-card', 'oneToMany', 'api::post.post'>;
    button: Attribute.Component<'component.link'>;
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
    title: Attribute.String;
    description: Attribute.Text;
    categories: Attribute.Relation<
      'block.category-card',
      'oneToMany',
      'api::ads-category.ads-category'
    >;
    button: Attribute.Component<'component.link'>;
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
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
    reviews: Attribute.Component<'component.icon-box', true>;
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
    name: Attribute.String;
    feedback: Attribute.Text;
    avatar: Attribute.Media;
    link: Attribute.String;
    type: Attribute.Enumeration<['Internal', 'External']>;
    star: Attribute.Enumeration<
      ['One Star', 'Two Star', 'Three Start', 'Four Star', 'Five Star']
    >;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Alt: Attribute.String;
    link: Attribute.String;
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
    label: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['External', 'Internal']>;
    target: Attribute.Enumeration<['_blank', '_self']>;
  };
}

export interface ComponentSearch extends Schema.Component {
  collectionName: 'components_component_searches';
  info: {
    displayName: 'search';
    icon: 'arrowRight';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface ComponentSocialLink extends Schema.Component {
  collectionName: 'components_component_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
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
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.link'>;
  };
}

export interface FormsFilter extends Schema.Component {
  collectionName: 'components_forms_filters';
  info: {
    displayName: 'Filter';
    icon: 'collapse';
  };
  attributes: {
    filterByCategory: Attribute.String;
    filterByCondition: Attribute.String;
    sort: Attribute.Enumeration<['Hight to Low', 'Low to High']>;
    title: Attribute.String;
  };
}

export interface FormsSeaechForm extends Schema.Component {
  collectionName: 'components_forms_seaech_forms';
  info: {
    displayName: 'Search';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    searchByWords: Attribute.String;
    searchByLocation: Attribute.String;
    button: Attribute.String;
    link: Attribute.String;
  };
}

export interface FormsSearchFilter extends Schema.Component {
  collectionName: 'components_forms_search_filters';
  info: {
    displayName: 'SearchFilter';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    search: Attribute.Component<'forms.seaech-form'>;
    filter: Attribute.Component<'forms.filter'>;
    description: Attribute.Text;
  };
}

export interface HeaderBreadcrumbs extends Schema.Component {
  collectionName: 'components_header_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
    icon: 'manyWays';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    showBreadcrumb: Attribute.Boolean;
    style: Attribute.JSON;
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
    link: Attribute.String;
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
    logo: Attribute.Media;
    link: Attribute.String;
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
    announcement: Attribute.String;
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
    title: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.Media;
    socialLink: Attribute.Component<'component.social-link', true>;
  };
}

export interface WidgetFooterTwo extends Schema.Component {
  collectionName: 'components_widget_footer_twos';
  info: {
    displayName: 'FooterTwo';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    FooterMenu: Attribute.Component<'component.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner-one': BannerBannerOne;
      'block.ad-card': BlockAdCard;
      'block.blog-card': BlockBlogCard;
      'block.category-card': BlockCategoryCard;
      'block.location-card': BlockLocationCard;
      'block.review-card': BlockReviewCard;
      'component.icon-box': ComponentIconBox;
      'component.image': ComponentImage;
      'component.link': ComponentLink;
      'component.search': ComponentSearch;
      'component.social-link': ComponentSocialLink;
      'component.titles': ComponentTitles;
      'forms.filter': FormsFilter;
      'forms.seaech-form': FormsSeaechForm;
      'forms.search-filter': FormsSearchFilter;
      'header.breadcrumbs': HeaderBreadcrumbs;
      'header.header': HeaderHeader;
      'header.logo': HeaderLogo;
      'header.topbar': HeaderTopbar;
      'widget.footer-one': WidgetFooterOne;
      'widget.footer-two': WidgetFooterTwo;
    }
  }
}
