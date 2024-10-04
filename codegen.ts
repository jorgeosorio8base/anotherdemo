
        import type { CodegenConfig } from '@graphql-codegen/cli';
      
        
  const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://staging-api.8basedev.com/cm1uzhvk3000c0al7byps2wfc',
  generates: {
    'libs/core/src/definitions/schema.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-document-nodes'],
      config: {
        skipTypename: true,
      },
    },
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};


        export default config;
    