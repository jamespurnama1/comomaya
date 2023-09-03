
type type =
  "Strategy" |
  "Naming" |
  "Logo" |
  "Identity" |
  "Packaging" |
  "Website" |
  "Digital";

interface Featured {
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
  metadata: {
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
}
  
interface Landing {
  objects: {
    metadata: {
      featured: Featured[]
    }
  }[],
  total: number
}

interface Listing {

}

interface List {
  object: {
    metadata: {
      list: Featured[]
    }
  },
  total: number
}