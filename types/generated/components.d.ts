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
    style: Attribute.JSON;
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
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface ComponentMetaData extends Schema.Component {
  collectionName: 'components_component_meta_data';
  info: {
    displayName: 'MetaData';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
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

export interface ComponentTextField extends Schema.Component {
  collectionName: 'components_component_text_fields';
  info: {
    displayName: 'Text Field';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    categories: Attribute.Relation<
      'forms.filter',
      'oneToMany',
      'api::ads-category.ads-category'
    >;
    sort: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Hight to Low:price-desc',
          'Low to High:price-asc',
          'A to Z:title-desc',
          'Z to A:title-asc',
          'New to Old:date-desc',
          'Old to New:date-asc'
        ]
      >;
    condition: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['New:New', 'Used:Used']
      >;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface TableMeta extends Schema.Component {
  collectionName: 'components_table_metas';
  info: {
    displayName: 'meta';
    icon: 'arrowRight';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface TablePricing extends Schema.Component {
  collectionName: 'components_table_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'component.link'>;
    price: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    table: Attribute.Component<'component.meta-data', true>;
  };
}

export interface WidgetAdBanner extends Schema.Component {
  collectionName: 'components_widget_ad_banners';
  info: {
    displayName: 'Ad Banner';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
    alt: Attribute.String;
    link: Attribute.String;
  };
}

export interface WidgetContactForm extends Schema.Component {
  collectionName: 'components_widget_contact_forms';
  info: {
    displayName: 'ContactForm';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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

export interface WidgetSafetyTips extends Schema.Component {
  collectionName: 'components_widget_safety_tips';
  info: {
    displayName: 'SafetyTips';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lists: Attribute.Component<'component.text-field', true>;
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
      'component.meta-data': ComponentMetaData;
      'component.search': ComponentSearch;
      'component.social-link': ComponentSocialLink;
      'component.text-field': ComponentTextField;
      'component.titles': ComponentTitles;
      'forms.filter': FormsFilter;
      'forms.seaech-form': FormsSeaechForm;
      'forms.search-filter': FormsSearchFilter;
      'header.breadcrumbs': HeaderBreadcrumbs;
      'header.header': HeaderHeader;
      'header.logo': HeaderLogo;
      'header.topbar': HeaderTopbar;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'table.meta': TableMeta;
      'table.pricing': TablePricing;
      'widget.ad-banner': WidgetAdBanner;
      'widget.contact-form': WidgetContactForm;
      'widget.footer-one': WidgetFooterOne;
      'widget.footer-two': WidgetFooterTwo;
      'widget.safety-tips': WidgetSafetyTips;
    }
  }
}
