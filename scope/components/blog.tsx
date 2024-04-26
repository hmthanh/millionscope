"use client"
import React, { Component } from "react";
export default function Blog({ children }: any) {
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

                    <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Quick Start<span className="nx-absolute -nx-mt-20" id="quick-start">
                    </span>
                        <a href="#quick-start" className="subheading-anchor" aria-label="Permalink for this section">
                        </a>
                    </h2>
                    {children}
                </main>
            </article>
        </div>
    )
}
