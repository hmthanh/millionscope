"use client"
import React, { Component } from "react";
export default function MyBodyBlog({ children }: any) {
    return (
        <div className="nx-mx-auto nx-flex nx-max-w-[90rem]">
            <div className="motion-reduce:nx-transition-none [transition:background-color_1.5s_ease] nx-bg-transparent">
            </div>
            <aside className="nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out print:nx-hidden md:nx-w-64 md:nx-sticky md:nx-self-start max-md:[transform:translate3d(0,-100%,0)]">
                <div className="nx-px-4 nx-pt-4 md:nx-hidden">
                    <div className="nextra-search nx-relative md:nx-w-64">
                        <div className="nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300">
                            <input className="nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors nx-text-base nx-leading-tight md:nx-text-sm nx-bg-black/[.05] dark:nx-bg-gray-50/10 focus:nx-bg-white dark:focus:nx-bg-dark placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400 contrast-more:nx-border contrast-more:nx-border-current" type="search" placeholder="Search documentation..." />
                            <kbd className="nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5 nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500 nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50 contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current nx-items-center nx-gap-1 nx-pointer-events-none nx-hidden sm:nx-flex nx-opacity-100">
                                <span className="nx-text-xs">⌘</span>K</kbd>
                        </div>
                    </div>
                </div>
                <div className="nx-overflow-y-auto nx-overflow-x-hidden nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))] nextra-scrollbar">
                    <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                        <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100">
                            <ul className="nx-flex nx-flex-col nx-gap-1 max-md:nx-hidden">
                                <li className="nx-flex nx-flex-col nx-gap-1 active">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500" href="/docs/getting-started">Getting Started</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/api">API</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/global-configuration">Global Configuration</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/data-fetching">Data Fetching</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/revalidation">Auto Revalidation</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/arguments">Arguments</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/mutation">Mutation &amp; Revalidation</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/error-handling">Error Handling</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/conditional-fetching">Conditional Data Fetching</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/pagination">Pagination</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/subscription">Subscription</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/prefetching">Prefetching</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/with-nextjs">Next.js SSG and SSR</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/typescript">TypeScript</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/suspense">Suspense</a>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/middleware">Middleware</a>
                                </li>
                                <li className="open">
                                    <button className="nx-items-center nx-justify-between nx-gap-2 nx-text-left nx-w-full nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Advanced<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                        <path d="M9 5l7 7-7 7" className="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]">
                                        </path>
                                    </svg>
                                    </button>
                                    <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                                        <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                            <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                                <li className="nx-flex nx-flex-col nx-gap-1">
                                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/understanding">Understanding SWR</a>
                                                </li>
                                                <li className="nx-flex nx-flex-col nx-gap-1">
                                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/cache">Cache</a>
                                                </li>
                                                <li className="nx-flex nx-flex-col nx-gap-1">
                                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/performance">Performance</a>
                                                </li>
                                                <li className="nx-flex nx-flex-col nx-gap-1">
                                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/react-native">React Native</a>
                                                </li>
                                                <li className="nx-flex nx-flex-col nx-gap-1">
                                                    <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/devtools">Developer Tools</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nx-flex nx-flex-col nx-gap-1">
                                    <a href="https://github.com/vercel/swr/releases" target="_blank" rel="noreferrer" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Change Log<span className="nx-sr-only"> (opens in a new tab)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="nx-flex nx-flex-col nx-gap-1 md:nx-hidden">
                        <li className="open">
                            <button className="nx-items-center nx-justify-between nx-gap-2 nx-text-left nx-w-full nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Docs<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                <path d="M9 5l7 7-7 7" className="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]">
                                </path>
                            </svg>
                            </button>
                            <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                                <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                    <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                        <li className="nx-flex nx-flex-col nx-gap-1 active">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500" href="/docs/getting-started">Getting Started</a>
                                            <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                                <li>
                                                    <a href="#installation" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500">Installation</a>
                                                </li>
                                                <li>
                                                    <a href="#quick-start" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Quick Start</a>
                                                </li>
                                                <li>
                                                    <a href="#make-it-reusable" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Make It Reusable</a>
                                                </li>
                                                <li>
                                                    <a href="#example" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-[&quot;#&quot;] nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Example</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/api">API</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/global-configuration">Global Configuration</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/data-fetching">Data Fetching</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/revalidation">Auto Revalidation</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/arguments">Arguments</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/mutation">Mutation &amp; Revalidation</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/error-handling">Error Handling</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/conditional-fetching">Conditional Data Fetching</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/pagination">Pagination</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/subscription">Subscription</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/prefetching">Prefetching</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/with-nextjs">Next.js SSG and SSR</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/typescript">TypeScript</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/suspense">Suspense</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/middleware">Middleware</a>
                                        </li>
                                        <li className="">
                                            <button className="nx-items-center nx-justify-between nx-gap-2 nx-text-left nx-w-full nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Advanced<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                                <path d="M9 5l7 7-7 7" className="nx-origin-center nx-transition-transform rtl:-nx-rotate-180">
                                                </path>
                                            </svg>
                                            </button>
                                            <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none" style={{ height: 0 }}>
                                                <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-0 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                                    <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/understanding">Understanding SWR</a>
                                                        </li>
                                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/cache">Cache</a>
                                                        </li>
                                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/performance">Performance</a>
                                                        </li>
                                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/react-native">React Native</a>
                                                        </li>
                                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/docs/advanced/devtools">Developer Tools</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a href="https://github.com/vercel/swr/releases" target="_blank" rel="noreferrer" className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Change Log<span className="nx-sr-only"> (opens in a new tab)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="open">
                            <button className="nx-items-center nx-justify-between nx-gap-2 nx-text-left nx-w-full nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50">Examples<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                <path d="M9 5l7 7-7 7" className="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]">
                                </path>
                            </svg>
                            </button>
                            <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                                <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                    <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/basic">Basic Usage</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/auth">Authentication</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/optimistic-ui">Optimistic UI</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/infinite-loading">Infinite Loading</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/error-handling">Error Handling</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/ssr">Next.js SSR</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/examples/subscription">Subscription</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="open">
                            <a className="nx-items-center nx-justify-between nx-gap-2 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/blog">Blog<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5">
                                <path d="M9 5l7 7-7 7" className="nx-origin-center nx-transition-transform rtl:-nx-rotate-180 ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]">
                                </path>
                            </svg>
                            </a>
                            <div className="nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none">
                                <div className="nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none nx-opacity-100 ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1">
                                    <ul className="nx-flex nx-flex-col nx-gap-1 nx-relative before:nx-absolute before:nx-inset-y-1 before:nx-w-px before:nx-bg-gray-200 before:nx-content-[&quot;&quot;] dark:before:nx-bg-neutral-800 ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0 ltr:nx-ml-3 rtl:nx-mr-3">
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/blog/swr-v2">Announcing SWR 2.0</a>
                                        </li>
                                        <li className="nx-flex nx-flex-col nx-gap-1">
                                            <a className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlightcolor:-transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50" href="/blog/swr-v1">Announcing SWR 1.0</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nx-sticky nx-bottom-0 nx-bg-white dark:nx-bg-dark nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff] nx-flex nx-items-center nx-gap-2 dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111] contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none nx-justify-end nx-border-t" data-toggle-animation="off">
                    <button title="Change language" className="nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 nx-grow" id="headlessui-listbox-button-:R2fjcm:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                        <span className="nx-flex nx-items-center nx-gap-2">
                            <svg viewBox="2 2 16 16" width="12" height="12" fill="currentColor">
                                <path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z">
                                </path>
                            </svg>
                            <span className="">English</span>
                        </span>
                    </button>
                    <div className="">
                        <button title="Change theme" className="nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50" id="headlessui-listbox-button-:R2njcm:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                            <div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
                                <svg fill="none" viewBox="3 3 18 18" width="12" height="12" stroke="currentColor">
                                    <path fill="currentColor" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                    </path>
                                </svg>
                                <span className="md:nx-hidden">Light</span>
                            </div>
                        </button>
                    </div>
                </div>
            </aside>
            <nav className="nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden nx-px-4" aria-label="table of contents">
                <div className="nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto] nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4">
                    <p className="nx-mb-4 nx-font-semibold nx-tracking-tight">On This Page</p>
                    <ul>
                        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                            <a href="#installation" className="nx-font-semibold nx-inline-block nx-text-primary-600 nx-subpixel-antialiased contrast-more:!nx-text-primary-600 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">Installation</a>
                        </li>
                        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                            <a href="#quick-start" className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">Quick Start</a>
                        </li>
                        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                            <a href="#make-it-reusable" className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">Make It Reusable</a>
                        </li>
                        <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6">
                            <a href="#example" className="nx-font-semibold nx-inline-block nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300 contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words">Example</a>
                        </li>
                    </ul>
                    <div className="nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111] nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800 contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400">
                        <a href="https://github.com/vercel/swr-site/issues/new?title=Feedback%20for%20%E2%80%9CGetting%20Started%E2%80%9D&amp;labels=feedback" target="_blank" rel="noreferrer" className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50">Question? Give us feedback →<span className="nx-sr-only"> (opens in a new tab)</span>
                        </a>
                        <a className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50" href="https://github.com/vercel/swr-site/blob/main/pages/docs/getting-started.en-US.mdx">Edit this page on GitHub →</a>
                    </div>
                </div>
            </nav>
            <div id="reach-skip-nav">
            </div>
            <article className="nx-w-full nx-break-words nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]">
                <main className="nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12">
                    <div className="nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 contrast-more:nx-text-current">
                        <div className="nx-whitespace-nowrap nx-transition-colors nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis" title="Docs">Docs</div>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-w-3.5 nx-shrink-0">
                            <path d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                        <div className="nx-whitespace-nowrap nx-transition-colors nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-400 contrast-more:dark:nx-text-current" title="Getting Started">Getting Started</div>
                    </div>
                    <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">Getting Started</h1>
                    <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Installation<span className="nx-absolute -nx-mt-20" id="installation">
                    </span>
                        <a href="#installation" className="subheading-anchor" aria-label="Permalink for this section">
                        </a>
                    </h2>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Inside your React project directory, run the following:</p>
                    <div className="nextra-scrollbar nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain">
                        <div className="nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800" role="tablist" aria-orientation="horizontal">
                            <button className="nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors -nx-mb-0.5 nx-select-none nx-border-b-2 nx-border-primary-500 nx-text-primary-600" id="headlessui-tabs-tab-:Rb1r9cm:" role="tab" type="button" aria-selected="true"></button>
                            <button className="nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors -nx-mb-0.5 nx-select-none nx-border-b-2 nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white" id="headlessui-tabs-tab-:Rj1r9cm:" role="tab" type="button" aria-selected="false" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:Rl1r9cm:">npm</button>
                            <button className="nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors -nx-mb-0.5 nx-select-none nx-border-b-2 nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white" id="headlessui-tabs-tab-:Rr1r9cm:" role="tab" type="button" aria-selected="false" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:Rt1r9cm:">yarn</button>
                        </div>
                    </div>
                    <div>
                        <div className="nx-rounded nx-pt-6" id="headlessui-tabs-panel-:Rd1r9cm:" role="tabpanel" >
                            <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
                                <pre className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4 " data-language="bash" data-theme="default">
                                    <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr" data-language="bash" data-theme="default">
                                        <span className="line">
                                            <span style={{ color: "var(--shiki-color-text)" }}>pnpm </span>
                                            <span style={{ color: "var(--shiki-token-string)" }}>add</span>
                                            <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                            <span style={{ color: "var(--shiki-token-string)" }}>swr</span>
                                        </span>
                                    </code>
                                </pre>
                                <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                                    <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                                        <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                            <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                            <rect x="9" y="9" width="13" height="13" rx="2"   >
                                            </rect>
                                            <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <span id="headlessui-tabs-panel-:Rl1r9cm:" role="tabpanel">
                        </span>
                        <span id="headlessui-tabs-panel-:Rt1r9cm:" role="tabpanel">
                        </span>
                    </div>
                    <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Quick Start<span className="nx-absolute -nx-mt-20" id="quick-start">
                    </span>
                        <a href="#quick-start" className="subheading-anchor" aria-label="Permalink for this section">
                        </a>
                    </h2>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">For normal RESTful APIs with JSON data, first you need to create a                              <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">fetcher                             </code> function, which is just a wrapper of the native                             <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">fetch                             </code>:</p>                         <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
                        <pre className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4 " data-language="jsx" data-theme="default">
                            <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr" data-language="jsx" data-theme="default">
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>const</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>fetcher</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> (</span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>...</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>args) </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=&gt;</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>fetch</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>(</span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>...</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>args)</span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>.then</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>(res </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=&gt;</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>res</span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>.json</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>())</span>
                                </span>
                            </code>
                        </pre>
                        <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                    <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                    </path>
                                </svg>
                            </button>
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                    <rect x="9" y="9" width="13" height="13" rx="2"   >
                                    </rect>
                                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4 contrast-more:nx-border-current contrast-more:dark:nx-border-current nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300">
                        <div className="nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2" >💡</div>
                        <div className="nx-w-full nx-min-w-0 nx-leading-7">
                            <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">If you want to use GraphQL API or libs like Axios, you can create your own fetcher function.
                                Check <a href="/docs/data-fetching">here</a> for more examples.</p>
                        </div>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Then you can import                              <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">useSWR                             </code> and start using it inside any function components:</p>                         <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">                             <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                </path>
                            </svg>
                        </button>
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                <rect x="9" y="9" width="13" height="13" rx="2"   >
                                </rect>
                                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                </path>
                            </svg>
                        </button>
                    </div>
                    </div>                         <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Make It Reusable<span className="nx-absolute -nx-mt-20" id="make-it-reusable">
                    </span>
                        <a href="#make-it-reusable" className="subheading-anchor" aria-label="Permalink for this section">
                        </a>
                    </h2>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">When building a web app, you might need to reuse the data in many places of the UI. It is incredibly easy to create reusable data hooks
                        on top of SWR:</p>
                    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">                             <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                </path>
                            </svg>
                        </button>
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                <rect x="9" y="9" width="13" height="13" rx="2"   >
                                </rect>
                                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                </path>
                            </svg>
                        </button>
                    </div>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">And use it in your components:</p>
                    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">                             <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                </path>
                            </svg>
                        </button>
                        <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                <rect x="9" y="9" width="13" height="13" rx="2"   >
                                </rect>
                                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                </path>
                            </svg>
                        </button>
                    </div>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">By adopting this pattern, you can forget about <strong>fetching</strong> data in the imperative way: start the request, update the loading state, and return the final result.
                        Instead, your code is more declarative: you just need to specify what data is used by the component.</p>
                    <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Example<span className="nx-absolute -nx-mt-20" id="example">
                    </span>
                        <a href="#example" className="subheading-anchor" aria-label="Permalink for this section">
                        </a>
                    </h2>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">In a real-world example, our website shows a navbar and the content, both depend on                              <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">user                             </code>:</p>                        <div className="mt-8">
                        <svg fill="none" viewBox="0 0 769 193" className="invert-on-dark">
                            <path fill="#fff" d="M0 0h768v193H0z">
                            </path>
                            <mask id="a" width="32" height="32" x="720" y="11" maskUnits="userSpaceOnUse">
                                <circle cx="736" cy="27" r="16" fill="#fff">
                                </circle>
                            </mask>
                            <path fill="#EEE" d="M15 24h186v7H15z">
                            </path>
                            <path stroke="#EEE" d="M0 54.5h768">
                            </path>
                            <path fill="#E5E5E5" d="M423 107h108v14H423z">
                            </path>
                            <path fill="#000" d="M242.4 122h3.1l3.5-12.2h.2l3.4 12.2h3.2l4.9-17.5h-3.4l-3.2 12.9h-.1l-3.4-12.9h-3l-3.4 12.9h-.2l-3.1-12.9h-3.4l4.9 17.5zm24.8.3c3 0 5.2-1.5 5.7-3.8l-2.9-.3c-.4 1-1.4 1.7-2.7 1.7-2 0-3.4-1.4-3.4-3.6h9.1v-1c0-4.5-2.7-6.6-6-6.6-3.7 0-6.1 2.8-6.1 6.8 0 4.1 2.4 6.8 6.3 6.8zm-3.3-8c.1-1.8 1.3-3.2 3.2-3.2 1.8 0 3 1.3 3 3.1h-6.2zm14.8-9.8h-3V122h3v-17.5zm9 17.8c3.2 0 5.3-2 5.5-4.8h-3a2.6 2.6 0 01-2.6 2.2c-1.9 0-3.1-1.6-3.1-4.2 0-2.7 1.2-4.3 3.1-4.3 1.5 0 2.4 1 2.7 2.2h3c-.3-2.8-2.5-4.7-5.7-4.7-3.8 0-6.3 2.8-6.3 6.8s2.4 6.8 6.3 6.8zm13.8 0c3.8 0 6.2-2.7 6.2-6.8 0-4-2.4-6.8-6.2-6.8-3.9 0-6.3 2.7-6.3 6.8 0 4 2.4 6.8 6.3 6.8zm0-2.5c-2.1 0-3.2-2-3.2-4.3 0-2.4 1-4.3 3.2-4.3 2 0 3.1 1.9 3.1 4.3s-1 4.3-3.1 4.3zm8.9 2.2h3v-8c0-1.6 1.1-2.7 2.4-2.7 1.3 0 2.2 1 2.2 2.3v8.4h3v-8.2c0-1.4 1-2.5 2.4-2.5 1.3 0 2.3.8 2.3 2.4v8.3h3v-8.8c0-3-1.6-4.5-4-4.5-2 0-3.4 1-4 2.4h-.1c-.5-1.4-1.8-2.4-3.5-2.4-1.8 0-3.1 1-3.6 2.4h-.2V109h-3v13zm27.3.3c3 0 5.1-1.5 5.7-3.8l-2.9-.3c-.4 1-1.4 1.7-2.8 1.7-2 0-3.3-1.4-3.3-3.6h9.1v-1c0-4.5-2.8-6.6-6-6.6-3.7 0-6.2 2.8-6.2 6.8 0 4.1 2.4 6.8 6.4 6.8zm-3.3-8c0-1.8 1.3-3.2 3.2-3.2 1.7 0 3 1.3 3 3.1h-6.2zm17.8 7.7h3v-2h.2a4 4 0 003.8 2.2c3 0 5.4-2.4 5.4-6.7 0-4.4-2.4-6.8-5.4-6.8a3.9 3.9 0 00-3.8 2.4h-.1v-6.6h-3V122zm3-6.5c0-2.6 1.1-4.2 3.1-4.2s3.1 1.7 3.1 4.2c0 2.4-1 4.2-3 4.2s-3.2-1.7-3.2-4.2zm15.8 6.8c2 0 3.2-1 3.8-2.1h.1v1.8h3v-8.8c0-3.4-2.9-4.5-5.4-4.5-2.7 0-4.8 1.3-5.5 3.7l2.9.4c.3-1 1.2-1.7 2.7-1.7 1.4 0 2.2.7 2.2 2 0 1-1 1-3.3 1.2-2.5.3-5 1-5 4 0 2.6 2 4 4.5 4zm.8-2.3c-1.3 0-2.3-.6-2.3-1.7 0-1.2 1-1.7 2.5-1.9.8-.1 2.4-.3 2.8-.6v1.5c0 1.5-1.2 2.7-3 2.7zm14.9 2.3c3.3 0 5.4-2 5.6-4.8h-3a2.6 2.6 0 01-2.6 2.2c-2 0-3.2-1.6-3.2-4.2 0-2.7 1.3-4.3 3.2-4.3 1.5 0 2.4 1 2.6 2.2h3c-.2-2.8-2.4-4.7-5.6-4.7-3.9 0-6.3 2.8-6.3 6.8s2.4 6.8 6.3 6.8zm8.1-.3h3.1v-4.4l1.1-1.2 4 5.6h3.7l-5.3-7.4 5-5.7h-3.6l-4.7 5.3h-.2v-9.7h-3V122zm17.3-2.4h-2.7v1c-.2 2.3-.8 4.6-1 5.7h2c.4-1.1 1.4-3.6 1.6-5.7l.1-1z">
                            </path>
                            <path fill="#EEE" d="M5 1h758a4 4 0 014 4v173h1V5a5 5 0 00-5-5H5a5 5 0 00-5 5v173h1V5a4 4 0 014-4z" >
                            </path>
                        </svg>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Traditionally, we fetch data once using                              <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">useEffect                             </code> in the top level component, and pass it to child components via props (notice that we dont handle error state for now):</p>                         <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
                        <pre className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4 " data-language="jsx" data-theme="default">

                        </pre>
                        <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                    <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                    </path>
                                </svg>
                            </button>
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                    <rect x="9" y="9" width="13" height="13" rx="2"   >
                                    </rect>
                                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Usually, we need to keep all the data fetching in the top level component and add props to every component deep down the tree.
                        The code will become harder to maintain if we add more data dependency to the page.</p>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Although we can avoid passing props using <a href="https://reactjs.org/docs/context.html" target="_blank" rel="noreferrer" className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]">Context<span className="nx-sr-only"> (opens in a new tab)</span>
                    </a>, there&apos;s still the dynamic content problem:
                        components inside the page content can be dynamic, and the top level component might not know what data will be needed by its child components.</p>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">SWR solves the problem perfectly. With the                              <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr">useUser                             </code> hook we just created, the code can be refactored to:</p>                         <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
                        <pre className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4 " data-language="jsx" data-theme="default">
                            <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10  " dir="ltr" data-language="jsx" data-theme="default">
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-comment)" }}>page component</span>
                                </span>
                                <span className="line"> </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>function</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>Page</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> () </span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>div</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>    &lt;</span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>Navbar</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>    &lt;</span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>Content</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  &lt;/</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>div</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                </span>
                                <span className="line"> </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-comment)" }}>child components</span>
                                </span>
                                <span className="line"> </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>function</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>Navbar</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> () </span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>div</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>    ...</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>    &lt;</span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>Avatar</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  &lt;/</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>div</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                </span>
                                <span className="line"> </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>function</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>Content</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> () </span>
                                </span>
                                <span className="line highlighted">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>const</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>user</span>
                                    <span style={{ color: "var(--shiki-token-punctuation)" }}>,</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>isLoading</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>useUser</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>()</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>if</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> (isLoading) </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>Spinner</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>h1</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;Welcome back, </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>user</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>.name&lt;/</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>h1</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                </span>
                                <span className="line"> </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>function</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>Avatar</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> () </span>
                                </span>
                                <span className="line highlighted">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>const</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>user</span>
                                    <span style={{ color: "var(--shiki-token-punctuation)" }}>,</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>isLoading</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>useUser</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>()</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>if</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> (isLoading) </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>Spinner</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}>  </span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>return</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> &lt;</span>
                                    <span style={{ color: "var(--shiki-token-string-expression)" }}>img</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}> </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>src</span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>user</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>.avatar </span>
                                    <span style={{ color: "var(--shiki-token-function)" }}>alt</span>
                                    <span style={{ color: "var(--shiki-token-keyword)" }}>=</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                    <span style={{ color: "var(--shiki-token-constant)" }}>user</span>
                                    <span style={{ color: "var(--shiki-color-text)" }}>.name /&gt;</span>
                                </span>
                                <span className="line">
                                    <span style={{ color: "var(--shiki-color-text)" }}></span>
                                </span>
                            </code>
                        </pre>
                        <div className="nx-opacity-0 nx-transition [div:hover>&amp;]:nx-opacity-100 focus-within:nx-opacity-100 nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0 nx-top-0">
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 md:nx-hidden" title="Toggle word wrap">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="nx-pointer-events-none nx-h-4 nx-w-4">
                                    <path fill="currentColor" d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z">
                                    </path>
                                </svg>
                            </button>
                            <button className="nextra-button nx-transition-all active:nx-opacity-50 nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5 dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50 " title="Copy code" >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4">
                                    <rect x="9" y="9" width="13" height="13" rx="2"   >
                                    </rect>
                                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"   >
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Data is now <strong>bound</strong> to the components which need the data, and all components are <strong>independent</strong> to each other.
                        All the parent components don&apos;t need to know anything about the data or passing data around. They just render.
                        The code is much simpler and easier to maintain now.</p>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">The most beautiful thing is that there will be only <strong>1 request</strong> sent to the API, because they use the same SWR key and
                        the request is <strong>deduped</strong>, <strong>cached</strong> and <strong>shared</strong> automatically.</p>
                    <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">Also, the application now has the ability to refetch the data on <a className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]" href="/docs/revalidation">user focus or network reconnect</a>!
                        That means, when the user&apos;s laptop wakes from sleep or they switch between browser tabs, the data will be refreshed automatically.</p>
                    <div className="nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400">Last updated on <time >May 9, 2023</time>
                    </div>
                    <div className="nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800 contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400 print:nx-hidden">
                        <a title="API" className="nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left" href="/docs/api">API<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nx-inline nx-h-5 nx-shrink-0 rtl:nx-rotate-180">
                            <path d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                        </a>
                    </div>
                </main>
            </article>
        </div>
    )
}
