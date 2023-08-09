export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Author: {
        Row: {
          author_email: string
          author_id: string
          author_password: string
          author_username: string
          created_at: string | null
        }
        Insert: {
          author_email: string
          author_id?: string
          author_password: string
          author_username: string
          created_at?: string | null
        }
        Update: {
          author_email?: string
          author_id?: string
          author_password?: string
          author_username?: string
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
            referencedRelation: "Author"
            referencedColumns: ["author_id"]
          },
          {
            foreignKeyName: "Authors WebComics_webcomic_genre_fkey"
            columns: ["webcomic_genre"]
            referencedRelation: "Genres"
            referencedColumns: ["genre_id"]
          }
        ]
      }
      Fan: {
        Row: {
          created_at: string | null
          fan_email: string
          fan_id: string
          fan_password: string
          fan_username: string
        }
        Insert: {
          created_at?: string | null
          fan_email: string
          fan_id?: string
          fan_password: string
          fan_username: string
        }
        Update: {
          created_at?: string | null
          fan_email?: string
          fan_id?: string
          fan_password?: string
          fan_username?: string
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
            referencedRelation: "Publishers Product"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "Fans Collection_collected_webcomic_fkey"
            columns: ["collected_webcomic"]
            referencedRelation: "Authors WebComics"
            referencedColumns: ["webcomic_id"]
          },
          {
            foreignKeyName: "Fans Collection_fan_collector_fkey"
            columns: ["fan_collector"]
            referencedRelation: "Fan"
            referencedColumns: ["fan_id"]
          }
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
          publisher_email: string
          publisher_id: string
          publisher_name: string
          publisher_password: string
        }
        Insert: {
          created_at?: string | null
          publisher_email: string
          publisher_id?: string
          publisher_name: string
          publisher_password: string
        }
        Update: {
          created_at?: string | null
          publisher_email?: string
          publisher_id?: string
          publisher_name?: string
          publisher_password?: string
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
            referencedRelation: "Genres"
            referencedColumns: ["genre_id"]
          },
          {
            foreignKeyName: "Publishers Product_product_publisher_fkey"
            columns: ["product_publisher"]
            referencedRelation: "Publisher"
            referencedColumns: ["publisher_id"]
          }
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
