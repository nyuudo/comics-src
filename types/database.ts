export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Author: {
        Row: {
          author_bio: string | null
          author_collection: string[] | null
          author_community: string[] | null
          author_id: string
          author_profileImage: string | null
          author_socialmedia: string | null
          author_url: string | null
          author_username: string | null
          author_works: string[] | null
          created_at: string | null
        }
        Insert: {
          author_bio?: string | null
          author_collection?: string[] | null
          author_community?: string[] | null
          author_id?: string
          author_profileImage?: string | null
          author_socialmedia?: string | null
          author_url?: string | null
          author_username?: string | null
          author_works?: string[] | null
          created_at?: string | null
        }
        Update: {
          author_bio?: string | null
          author_collection?: string[] | null
          author_community?: string[] | null
          author_id?: string
          author_profileImage?: string | null
          author_socialmedia?: string | null
          author_url?: string | null
          author_username?: string | null
          author_works?: string[] | null
          created_at?: string | null
        }
        Relationships: []
      }
      "Authors WebComics": {
        Row: {
          created_at: string | null
          webcomic_author: string
          webcomic_cover: string
          webcomic_description: string | null
          webcomic_genre: number
          webcomic_id: number
          webcomic_images: string[]
          webcomic_title: string
          webcomic_year: number
        }
        Insert: {
          created_at?: string | null
          webcomic_author: string
          webcomic_cover: string
          webcomic_description?: string | null
          webcomic_genre: number
          webcomic_id?: number
          webcomic_images: string[]
          webcomic_title: string
          webcomic_year: number
        }
        Update: {
          created_at?: string | null
          webcomic_author?: string
          webcomic_cover?: string
          webcomic_description?: string | null
          webcomic_genre?: number
          webcomic_id?: number
          webcomic_images?: string[]
          webcomic_title?: string
          webcomic_year?: number
        }
        Relationships: [
          {
            foreignKeyName: "Authors WebComics_webcomic_author_fkey"
            columns: ["webcomic_author"]
            isOneToOne: false
            referencedRelation: "Author"
            referencedColumns: ["author_id"]
          },
          {
            foreignKeyName: "Authors WebComics_webcomic_genre_fkey"
            columns: ["webcomic_genre"]
            isOneToOne: false
            referencedRelation: "Genres"
            referencedColumns: ["genre_id"]
          },
        ]
      }
      Community: {
        Row: {
          followed_id: string
          follower_id: string
        }
        Insert: {
          followed_id?: string
          follower_id?: string
        }
        Update: {
          followed_id?: string
          follower_id?: string
        }
        Relationships: []
      }
      Fan: {
        Row: {
          created_at: string | null
          fan_bio: string | null
          fan_collection: string[] | null
          fan_community: string[] | null
          fan_id: string
          fan_profileImage: string | null
          fan_socialmedia: string | null
          fan_url: string | null
          fan_username: string | null
        }
        Insert: {
          created_at?: string | null
          fan_bio?: string | null
          fan_collection?: string[] | null
          fan_community?: string[] | null
          fan_id?: string
          fan_profileImage?: string | null
          fan_socialmedia?: string | null
          fan_url?: string | null
          fan_username?: string | null
        }
        Update: {
          created_at?: string | null
          fan_bio?: string | null
          fan_collection?: string[] | null
          fan_community?: string[] | null
          fan_id?: string
          fan_profileImage?: string | null
          fan_socialmedia?: string | null
          fan_url?: string | null
          fan_username?: string | null
        }
        Relationships: []
      }
      "Fans Collection": {
        Row: {
          collected_item_id: string
          collected_product: number | null
          collected_webcomic: number | null
          created_at: string | null
          fan_collector: string
        }
        Insert: {
          collected_item_id?: string
          collected_product?: number | null
          collected_webcomic?: number | null
          created_at?: string | null
          fan_collector: string
        }
        Update: {
          collected_item_id?: string
          collected_product?: number | null
          collected_webcomic?: number | null
          created_at?: string | null
          fan_collector?: string
        }
        Relationships: [
          {
            foreignKeyName: "Fans Collection_collected_product_fkey"
            columns: ["collected_product"]
            isOneToOne: true
            referencedRelation: "Publishers Product"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "Fans Collection_collected_webcomic_fkey"
            columns: ["collected_webcomic"]
            isOneToOne: true
            referencedRelation: "Authors WebComics"
            referencedColumns: ["webcomic_id"]
          },
          {
            foreignKeyName: "Fans Collection_fan_collector_fkey"
            columns: ["fan_collector"]
            isOneToOne: false
            referencedRelation: "Fan"
            referencedColumns: ["fan_id"]
          },
        ]
      }
      Genres: {
        Row: {
          genre_id: number
          genre_name: string
        }
        Insert: {
          genre_id?: number
          genre_name: string
        }
        Update: {
          genre_id?: number
          genre_name?: string
        }
        Relationships: []
      }
      Publisher: {
        Row: {
          created_at: string | null
          publisher_bio: string | null
          publisher_community: string[] | null
          publisher_id: string
          publisher_name: string | null
          publisher_profileImage: string | null
          publisher_publications: string[] | null
          publisher_socialmedia: string | null
          publisher_url: string | null
        }
        Insert: {
          created_at?: string | null
          publisher_bio?: string | null
          publisher_community?: string[] | null
          publisher_id?: string
          publisher_name?: string | null
          publisher_profileImage?: string | null
          publisher_publications?: string[] | null
          publisher_socialmedia?: string | null
          publisher_url?: string | null
        }
        Update: {
          created_at?: string | null
          publisher_bio?: string | null
          publisher_community?: string[] | null
          publisher_id?: string
          publisher_name?: string | null
          publisher_profileImage?: string | null
          publisher_publications?: string[] | null
          publisher_socialmedia?: string | null
          publisher_url?: string | null
        }
        Relationships: []
      }
      "Publishers Product": {
        Row: {
          created_at: string | null
          product_cover: string
          product_description: string | null
          product_genre: number
          product_id: number
          product_publisher: string
          product_title: string
          product_year: number
        }
        Insert: {
          created_at?: string | null
          product_cover: string
          product_description?: string | null
          product_genre: number
          product_id?: number
          product_publisher: string
          product_title: string
          product_year: number
        }
        Update: {
          created_at?: string | null
          product_cover?: string
          product_description?: string | null
          product_genre?: number
          product_id?: number
          product_publisher?: string
          product_title?: string
          product_year?: number
        }
        Relationships: [
          {
            foreignKeyName: "Publishers Product_product_genre_fkey"
            columns: ["product_genre"]
            isOneToOne: false
            referencedRelation: "Genres"
            referencedColumns: ["genre_id"]
          },
          {
            foreignKeyName: "Publishers Product_product_publisher_fkey"
            columns: ["product_publisher"]
            isOneToOne: false
            referencedRelation: "Publisher"
            referencedColumns: ["publisher_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
