// --------------------
// Responsive Types
// --------------------


// --------------------
// Documentation Types
// --------------------
export type Block =
  | { type: "heading"; level?: 1 | 2 | 3 | 4 | 5 | 6; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; content: string; language?: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface DocPage {
  id: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  blocks: Block[];
}













