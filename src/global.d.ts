
type type =
  "Strategy" |
  "Naming" |
  "Logo" |
  "Identity" |
  "Packaging" |
  "Website" |
  "Digital";

interface featured {
  id: string,
  slug: string,
  title: string,
  content: string,
  bucket: string,
  created_at: Date,
  created_by: string,
  modified_at: Date,
  created: Date,
  status: string,
  thumbnail: URL,
  published_at: Date,
  modified_by: string,
  publish_at: null | Date,
  unpublish_at: null | Date,
  type: string,
  metadata: featuredMetadata
}

interface service {
  id: string,
  slug: string,
  title: string,
  content: string,
  bucket: string,
  created_at: Date,
  created_by: string,
  modified_at: Date,
  created: Date,
  status: string,
  thumbnail: URL,
  published_at: Date,
  modified_by: string,
  publish_at: null | Date,
  unpublish_at: null | Date,
  type: string,
  metadata: servicesMetadata
}

interface testimonials {
  id: string,
  slug: string,
  title: string,
  content: string,
  bucket: string,
  created_at: Date,
  created_by: string,
  modified_at: Date,
  created: Date,
  status: string,
  thumbnail: URL,
  published_at: Date,
  modified_by: string,
  publish_at: null | Date,
  unpublish_at: null | Date,
  type: string,
  metadata: testimonialsMetadata
}

interface servicesMetadata {
  background : {
    url: URL
    imgix_url: URL
  },
  description: string,
  tags: string,
}

interface testimonialsMetadata {
  author: string,
  quote: string,
}

interface featuredMetadata {
    description: string,
    type: string,
    typejson: {
      type: type[]
    },
    type_mobile?: string,
    client: string,
    our_services: string
    industry: string,
    featured_as: string,
  }
  
interface Landing {
  objects: {
    metadata: {
      featured: Featured[]
    }
  }[],
  total: number
}

interface List {
  object: {
    metadata: {
      list: Featured[]
    }
  },
  total: number
}

interface creativeWork {
  '@type': 'CreativeWork' | 'Service';
  additionalType: 'CreativeWork';
  name: string;
  url: string;
  identifier: string;
  description: string;
  image: URL;
}