import type { CollectionConfig } from 'payload'

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'text',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'testblock1',
                fields: [
                  {
                    name: 'testfield',
                    type: 'text',
                  },
                ],
              },
            ],
            inlineBlocks: [
              {
                slug: 'myInlineBlock1',
                fields: [
                  {
                    name: 'key',
                    type: 'select',
                    options: ['value1', 'value2', 'value3'],
                  },
                ],
              },
              {
                slug: 'myInlineBlock2',
                fields: [
                  {
                    name: 'textfor inline-blocks',
                    type: 'text',
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
    {
      name: 'richText2',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'testblock',
                fields: [
                  {
                    name: 'testfield',
                    type: 'text',
                  },
                ],
              },
            ],
            inlineBlocks: [
              {
                slug: 'myInlineBlock3',
                fields: [
                  {
                    name: 'key',
                    type: 'select',
                    options: ['value1', 'value2', 'value3'],
                  },
                ],
              },
              {
                slug: 'myInlineBlock4',
                fields: [
                  {
                    name: 'text2',
                    type: 'text',
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
    // {
    //   type: 'row',
    //   fields: [],
    // },
    // {
    //   name: 'associatedMedia',
    //   type: 'upload',
    //   access: {
    //     create: () => true,
    //     update: () => false,
    //   },
    //   relationTo: mediaSlug,
    // },
  ],
  versions: {
    drafts: true,
  },
}
