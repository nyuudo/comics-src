export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      Author: {
        Row: {
          author_bio: string | null;
          author_collection: string[] | null;
          author_community: string[] | null;
          author_id: string;
          author_profileImage: string | null;
          author_socialmedia: string | null;
          author_url: string | null;
          author_username: string | null;
          author_works: string[] | null;
          created_at: string | null;
        };
        Insert: {
          author_bio?: string | null;
          author_collection?: string[] | null;
          author_community?: string[] | null;
          author_id?: string;
          author_profileImage?: string | null;
          author_socialmedia?: string | null;
          author_url?: string | null;
          author_username?: string | null;
          author_works?: string[] | null;
          created_at?: string | null;
        };
        Update: {
          author_bio?: string | null;
          author_collection?: string[] | null;
          author_community?: string[] | null;
          author_id?: string;
          author_profileImage?: string | null;
          author_socialmedia?: string | null;
          author_url?: string | null;
          author_username?: string | null;
          author_works?: string[] | null;
          created_at?: string | null;
        };
        Relationships: [];
      };
      "Authors WebComics": {
        Row: {
          created_at: string | null;
          webcomic_author: string;
          webcomic_cover: string;
          webcomic_description: string | null;
          webcomic_genre: number;
          webcomic_id: number;
          webcomic_images: string[];
          webcomic_title: string;
          webcomic_year: number;
        };
        Insert: {
          created_at?: string | null;
          webcomic_author: string;
          webcomic_cover: string;
          webcomic_description?: string | null;
          webcomic_genre: number;
          webcomic_id?: number;
          webcomic_images: string[];
          webcomic_title: string;
          webcomic_year: number;
        };
        Update: {
          created_at?: string | null;
          webcomic_author?: string;
          webcomic_cover?: string;
          webcomic_description?: string | null;
          webcomic_genre?: number;
          webcomic_id?: number;
          webcomic_images?: string[];
          webcomic_title?: string;
          webcomic_year?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Authors WebComics_webcomic_author_fkey";
            columns: ["webcomic_author"];
            isOneToOne: false;
            referencedRelation: "Author";
            referencedColumns: ["author_id"];
          },
          {
            foreignKeyName: "Authors WebComics_webcomic_genre_fkey";
            columns: ["webcomic_genre"];
            isOneToOne: false;
            referencedRelation: "Genres";
            referencedColumns: ["genre_id"];
          },
        ];
      };
      Community: {
        Row: {
          followed_id: string;
          follower_id: string;
        };
        Insert: {
          followed_id?: string;
          follower_id?: string;
        };
        Update: {
          followed_id?: string;
          follower_id?: string;
        };
        Relationships: [];
      };
      Fan: {
        Row: {
          created_at: string | null;
          fan_bio: string | null;
          fan_collection: string[] | null;
          fan_community: string[] | null;
          fan_id: string;
          fan_profileImage: string | null;
          fan_socialmedia: string | null;
          fan_url: string | null;
          fan_username: string | null;
        };
        Insert: {
          created_at?: string | null;
          fan_bio?: string | null;
          fan_collection?: string[] | null;
          fan_community?: string[] | null;
          fan_id?: string;
          fan_profileImage?: string | null;
          fan_socialmedia?: string | null;
          fan_url?: string | null;
          fan_username?: string | null;
        };
        Update: {
          created_at?: string | null;
          fan_bio?: string | null;
          fan_collection?: string[] | null;
          fan_community?: string[] | null;
          fan_id?: string;
          fan_profileImage?: string | null;
          fan_socialmedia?: string | null;
          fan_url?: string | null;
          fan_username?: string | null;
        };
        Relationships: [];
      };
      "Fans Collection": {
        Row: {
          collected_item_id: string;
          collected_product: number | null;
          collected_webcomic: number | null;
          created_at: string | null;
          fan_collector: string;
        };
        Insert: {
          collected_item_id?: string;
          collected_product?: number | null;
          collected_webcomic?: number | null;
          created_at?: string | null;
          fan_collector: string;
        };
        Update: {
          collected_item_id?: string;
          collected_product?: number | null;
          collected_webcomic?: number | null;
          created_at?: string | null;
          fan_collector?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Fans Collection_collected_product_fkey";
            columns: ["collected_product"];
            isOneToOne: true;
            referencedRelation: "Publishers Product";
            referencedColumns: ["product_id"];
          },
          {
            foreignKeyName: "Fans Collection_collected_webcomic_fkey";
            columns: ["collected_webcomic"];
            isOneToOne: true;
            referencedRelation: "Authors WebComics";
            referencedColumns: ["webcomic_id"];
          },
          {
            foreignKeyName: "Fans Collection_fan_collector_fkey";
            columns: ["fan_collector"];
            isOneToOne: false;
            referencedRelation: "Fan";
            referencedColumns: ["fan_id"];
          },
        ];
      };
      Genres: {
        Row: {
          genre_id: number;
          genre_name: string;
        };
        Insert: {
          genre_id?: number;
          genre_name: string;
        };
        Update: {
          genre_id?: number;
          genre_name?: string;
        };
        Relationships: [];
      };
      Publisher: {
        Row: {
          created_at: string | null;
          publisher_bio: string | null;
          publisher_community: string[] | null;
          publisher_id: string;
          publisher_name: string | null;
          publisher_profileImage: string | null;
          publisher_publications: string[] | null;
          publisher_socialmedia: string | null;
          publisher_url: string | null;
        };
        Insert: {
          created_at?: string | null;
          publisher_bio?: string | null;
          publisher_community?: string[] | null;
          publisher_id?: string;
          publisher_name?: string | null;
          publisher_profileImage?: string | null;
          publisher_publications?: string[] | null;
          publisher_socialmedia?: string | null;
          publisher_url?: string | null;
        };
        Update: {
          created_at?: string | null;
          publisher_bio?: string | null;
          publisher_community?: string[] | null;
          publisher_id?: string;
          publisher_name?: string | null;
          publisher_profileImage?: string | null;
          publisher_publications?: string[] | null;
          publisher_socialmedia?: string | null;
          publisher_url?: string | null;
        };
        Relationships: [];
      };
      "Publishers Product": {
        Row: {
          created_at: string | null;
          product_cover: string;
          product_description: string | null;
          product_genre: number;
          product_id: number;
          product_publisher: string;
          product_title: string;
          product_year: number;
        };
        Insert: {
          created_at?: string | null;
          product_cover: string;
          product_description?: string | null;
          product_genre: number;
          product_id?: number;
          product_publisher: string;
          product_title: string;
          product_year: number;
        };
        Update: {
          created_at?: string | null;
          product_cover?: string;
          product_description?: string | null;
          product_genre?: number;
          product_id?: number;
          product_publisher?: string;
          product_title?: string;
          product_year?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Publishers Product_product_genre_fkey";
            columns: ["product_genre"];
            isOneToOne: false;
            referencedRelation: "Genres";
            referencedColumns: ["genre_id"];
          },
          {
            foreignKeyName: "Publishers Product_product_publisher_fkey";
            columns: ["product_publisher"];
            isOneToOne: false;
            referencedRelation: "Publisher";
            referencedColumns: ["publisher_id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          user_metadata: Json | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          user_metadata: Json | null;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          user_metadata?: Json | null;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          user_metadata?: Json | null;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
            columns: ["upload_id"];
            isOneToOne: false;
            referencedRelation: "s3_multipart_uploads";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: { bucketid: string; name: string; owner: string; metadata: Json };
        Returns: undefined;
      };
      extension: {
        Args: { name: string };
        Returns: string;
      };
      filename: {
        Args: { name: string };
        Returns: string;
      };
      foldername: {
        Args: { name: string };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      operation: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
  storage: {
    Enums: {},
  },
} as const;
