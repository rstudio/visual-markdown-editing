

library(rmarkdown)

render("download.Rmd", output_file = "docs/_download.md", params = list(
  version = "1.4.411"
))
