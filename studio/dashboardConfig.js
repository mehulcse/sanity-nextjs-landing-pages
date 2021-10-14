export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6168133d4bb3accdfec03ef4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zfqp6yof',
                  apiId: '7aa0833f-5ac1-426b-9227-95b475fe6949'
                },
                {
                  buildHookId: '6168133d1b78c9bb8f2c3ee5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7sk1vjs2',
                  apiId: 'c53377ff-fddc-4707-85f1-775077f4de73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mehulcse/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7sk1vjs2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
