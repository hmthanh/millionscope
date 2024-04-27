import { MDXRemote } from "next-mdx-remote";
import { createElement } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { serialize } from "next-mdx-remote/serialize";
import async from '../app/demo/page';

function Table({ data }: any) {
    let headers = data.headers.map((header: any, index: any) => (
        <th key={index}>{header}</th>
    ))
    let rows = data.rows.map((row: any, index: any) => (
        <tr key={index}>
            {row.map((cell: any, cellIndex: any) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function CustomLink(props: any) {
    let href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }: any) {
    // let codeHTML = highlight(children)
    return <code  {...props} />
}


function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}


function createHeading(level: any) {
    const Heading = ({ children }: any) => {
        let slug = slugify(children)
        return createElement(
            `h${level}`,
            { id: slug },
            [
                createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        )
    }

    Heading.displayName = `Heading${level}`

    return Heading
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
}

async function getMDXSource() {
    const source = 'Some **mdx** text, with a component <Test />'
    const mdxSource = await serialize(source)

    // return { props: { source: mdxSource } }
    return mdxSource
}
export function CustomMDX(props: any) {
    const source = getMDXSource()
    return (
        <div className="wrapper">
        <MDXRemote
            {...props}
            {...source}
            components={{ ...components, ...(props.components || {}) }}
        />
        </div>
    )
}