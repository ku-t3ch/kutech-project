import { createDirectus, graphql, rest } from '@directus/sdk';
const directusClient = createDirectus('https://tech.nisit.ku.ac.th/cms').with(rest());

export default directusClient