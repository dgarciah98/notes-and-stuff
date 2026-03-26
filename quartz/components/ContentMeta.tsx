import { Date, getDate, getDateByDateType } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const result: (string | JSX.Element)[] = []
      const segments: (string | JSX.Element)[] = []
      const dates = fileData.dates
      var lastModifiedDate: (string | JSX.Element)[] = []
      console.log(fileData.frontmatter?.title)
      console.log(fileData.dates)
      if (dates) {
        if(dates.modified && dates.modified !== dates.created)
          lastModifiedDate.push(<Date date={getDateByDateType("modified", fileData)!} locale={cfg.locale} />)
        segments.push(<Date date={getDateByDateType("created", fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      result.push((
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      ))
      result.push((
          <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          Last updated: {lastModifiedDate}
        </p>
        ))

      return result
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
