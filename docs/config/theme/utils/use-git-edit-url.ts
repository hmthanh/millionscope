import gitUrlParse from 'git-url-parse'

// import { useConfig } from '../contexts'

export function useGitEditUrl(filePath = ''): string {
    // const config = useConfig()
    // const repo = gitUrlParse(config.docsRepositoryBase || '')
    const repo = gitUrlParse('')

    if (!repo) throw new Error('Invalid `docsRepositoryBase` URL!')

    return `${repo.href}/${filePath}`
}