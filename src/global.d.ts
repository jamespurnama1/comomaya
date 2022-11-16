  interface Landing {
    objects: {
      metadata: {
        featured: {
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
            client: string,
            our_services: string
            industry: string,
          }
        }[]
      }
    }[],
    total: number
  }

  interface List {
    objects: {
      metadata: {
        list: {
          id: string
          slug: string
          title: string
          content: string
          bucket: string
          created_at: Date
          created_by: string
          modified_at: Date
          created: Date
          status: string
          thumbnail: URL
          modified_by: string
          publish_at: Date | null
          published_at: Date
          unpublish_at: Date | null
          type: string
          metadata: {
            description: string
            type: string
            client: string
            our_services: string
            industry: string
          }
        }[]
      }
    }[],
    total: number
  }