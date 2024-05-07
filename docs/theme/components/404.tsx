import {useRouter} from 'next/router'
import {useMounted} from '@/client/hooks'
import type {ReactElement} from 'react'
import {useConfig, useThemeConfig} from '@/contexts'
import {getGitIssueUrl, renderComponent} from '@/theme/utils'
import {Anchor} from './anchor'

export function NotFoundPage(): ReactElement | null {
    const themeConfig = useThemeConfig()
    const mounted = useMounted()
    const {asPath} = useRouter()
    const {content, labels} = themeConfig.notFound
    if (!content) {
        return null
    }

    return (
        <p className="nx-text-center">
            <Anchor
                href={getGitIssueUrl({
                    repository: themeConfig.docsRepositoryBase,
                    title: `Found broken \`${mounted ? asPath : ''}\` link. Please fix!`,
                    labels
                })}
                newWindow
                className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
            >
                {renderComponent(content)}
            </Anchor>
        </p>
    )
}