"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function Directory() {
  const [touchStart, setTouchStart] = useState<any>(null)
  const [touchEnd, setTouchEnd] = useState<any>(null)
  const [isTouchScreen, setIsTouchScreen] = useState(false)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: any) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY])
    if (!isTouchScreen) setIsTouchScreen(true)
  }

  const onTouchMove = (e: any) =>
    setTouchEnd([e.targetTouches[0].clientX, e.targetTouches[0].clientY])

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const horizontalDistance = touchStart[0] - touchEnd[0]
    const verticalDistance = touchStart[1] - touchEnd[1]
    const isLeftSwipe = horizontalDistance > minSwipeDistance
    const isRightSwipe = horizontalDistance < -minSwipeDistance
    const isUpSwipe = verticalDistance > minSwipeDistance
    const isDownSwipe = verticalDistance < -minSwipeDistance

    if (isLeftSwipe) setNextPage()
    else if (isRightSwipe) setPrevPage()
    else if (isUpSwipe) setNextPage()
    else if (isDownSwipe) setPrevPage()
  }

  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  const setPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((pagenumber) => pagenumber - 1)
    }
  }

  const setNextPage = () => {
    if (!numPages) return
    if (pageNumber < numPages) {
      setPageNumber((pagenumber) => pagenumber + 1)
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }
  return (
    <div
      className="flex h-screen w-screen justify-center gap-4 px-4 pt-40 text-2xl"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        className={`${isTouchScreen == true ? "hidden" : ""}`}
        onClick={setPrevPage}
      >
        Prev
      </button>
      <div className="flex flex-col items-center justify-center">
        <p className="text-md my-4 flex font-medium">
          <p
            contentEditable
            onBlur={(e) => {
              // console.log(e.target.innerHTML)
              setPageNumber(parseInt(e.target.innerHTML))
            }}
          >
            {pageNumber}
          </p>
          /{numPages}
        </p>
        <Document
          file="/assets/parish_directory.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <button
        className={`${isTouchScreen == true ? "hidden" : ""}`}
        onClick={setNextPage}
      >
        Next
      </button>
    </div>
  )
}
