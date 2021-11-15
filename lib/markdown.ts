import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

import readingTime from 'reading-time'
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

// Root directory
const root = `${process.cwd()}/docs/`;

/**
 * Get all files '.mdx'
 *
 * @param {string} type Name directory.
 * @returns {array} A list of files.
 */
export function getFiles(type: string): Array<string> {
  return readdirSync(join(root, type));
}

/**
 * Get all files '.mdx' with frontmatter.
 *
 * @param {string} type Name directory.
 * @returns {Array} A list of object with frontmatter, slug.
 */
export function getAllFilesFrontMatter(type: string): Array<any> {
  const files = getFiles(type);

  return files.reduce((allPost, postSlug) => {
    const source = readFileSync(join(root, type, postSlug), "utf-8");

    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPost,
    ]
  }, []);
}

/**
 * Get file by slug.
 *
 * @param {string} type Name directory.
 * @param {string} slug Name file '.mdx'.
 * @returns {object} A promise with object.
 */
export async function getFileBySlug(type: string, slug: string): Promise<object> {
  const source = readFileSync(join(root, type, `${slug}.mdx`), "utf-8");

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options: any) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
