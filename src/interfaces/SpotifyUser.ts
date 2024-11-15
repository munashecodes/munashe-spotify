export interface ExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
  }
  
  export interface ExternalUrls {
    spotify: string;
  }
  
  export interface Followers {
    href: null;
    total: number;
  }
  
  export interface Images {
    height: number;
    url: string;
    width: number;
  }
  
  export interface SpotifyUser {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Images[];
    product: string;
    type: string;
    uri: string;
  }