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
                  buildHookId: '5f6bbe49689e3d423fe1e493',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hgziga2a',
                  apiId: 'ad05a8bb-f4a5-454c-ae34-4d8ab6b1661a'
                },
                {
                  buildHookId: '5f6bbe4ad119b14c9336e46c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rgvwt7ik',
                  apiId: 'a617e038-76c8-449b-a393-6ae5ea5fc8cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasloe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rgvwt7ik.netlify.app', category: 'apps'}
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
