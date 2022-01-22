import { Markdown } from "@/components/Markdown"

const markdown = `Here is some JavaScript code:

~~~jsx
export const UseTransform = () => {
  return (
    <>
      <p onClick={() => console.log('hello world')}>hello world</p>
      useTransform
      <Markdown markdown={markdown} />
    </>
  )
}
~~~

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export const UseTransform = () => {
  return (
    <>
      <p onClick={() => console.log('hello world')}>hello world</p>
      useTransform
      <Markdown markdown={markdown} />
    </>
  )
}