import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@/src/components/ui/breadcrumb"

  export function BreadcrumbHomepage() {
    return (
      <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
      </Breadcrumb>
    )
  }
  