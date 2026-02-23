import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { joinSegments } from "../util/path"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/logo.png")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
	   <a href={baseDir} class="box">
		  <img class="logo" src={iconPath} alt="goodvibes" />
      <span>{title}</span>
	   </a>
    </h2>
  )
}

PageTitle.css = `
.logo {
max-width: 30vmin;
width: 10vmax;
margin: 0;
display: block;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
