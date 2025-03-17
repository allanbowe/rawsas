export type PageContext = {
  page: string
  archives: { [key: string]: string }
  numPages: number
  currentPage: number
  year?: string
  tag?: string
}
