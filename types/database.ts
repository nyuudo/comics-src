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
          author_id: string
          author_username: string | null
          created_at: string | null
        }
        Insert: {
          author_id?: string
          author_username?: string | null
          created_at?: string | null
        }
        Update: {
          author_id?: string
          author_username?: string | null
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Author_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
      Fan: {
        Row: {
          created_at: string | null
          fan_id: string
          fan_username: string | null
        }
        Insert: {
          created_at?: string | null
          fan_id?: string
          fan_username?: string | null
        }
        Update: {
          created_at?: string | null
          fan_id?: string
          fan_username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Fan_fan_id_fkey"
            columns: ["fan_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
          publisher_id: string
          publisher_name: string | null
        }
        Insert: {
          created_at?: string | null
          publisher_id?: string
          publisher_name?: string | null
        }
        Update: {
          created_at?: string | null
          publisher_id?: string
          publisher_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Publisher_publisher_id_fkey"
            columns: ["publisher_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
