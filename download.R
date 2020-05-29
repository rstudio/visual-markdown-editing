

library(rmarkdown)

render("download.Rmd", output_file = "docs/_download.md", params = list(
  version = "1.4.416",
  win_version = "1.4.412"
))
