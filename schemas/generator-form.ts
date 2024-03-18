import * as z from 'zod';

/**
 * The default values for generator form
 *
 * @type {object}
 */
export const GENERATOR_FORM_DEFAULT_VALUES: object = {
  visibility: 'public',
};

/**
 * Schema for the generator form data. Which includes:
 *
 * @field template: string
 * @field projectName: string
 * @field repositoryName: string
 * @field tagline: string
 * @field visibility: string
 */
export const generatorFormSchema = z.object({
  template: z.string({ required_error: 'Please choose a template' }),
  projectName: z.string({ required_error: 'Please input a projectname' }),
  repositoryName: z.string({ required_error: 'Please input your repository name' }),
  tagline: z.string({ required_error: 'Please input your project tagline' }),
  visibility: z.string(),
});

/**
 * An array of objects that store fields of generator form
 * for rendering effeciently
 *
 * @field name: string - used for rendering on Form component from shadcn/ui
 * @field type: string - type of the field (input, select, etc.)
 * @field label: string - label for the field
 * @field placeholder: string - placeholder for the field
 * @field options: string[] - provided options for select box
 */
export const generatorFormFields = [
  {
    name: 'template',
    type: 'select',
    label: 'Project Template',
    placeholder: 'Choose Template for your project',
    options: [
      {
        value: 'docusaurus',
        title: 'Projectopia Docusaurus Template',
      },
      {
        value: 'mkdocs',
        title: 'Projectopia MKdocs Template',
      },
    ],
  },
  {
    name: 'projectName',
    type: 'input',
    label: 'Project Name',
    placeholder: 'Your Project name',
    options: [],
  },
  {
    name: 'repositoryName',
    type: 'input',
    label: 'Repository Name',
    placeholder: 'Your Github Repository display name',
    options: [],
  },
  {
    name: 'tagline',
    type: 'input',
    label: 'Project Tagline',
    placeholder: "Your Project's tagline",
    options: [],
  },
  {
    name: 'visibility',
    type: 'select',
    label: 'Project Visibility',
    placeholder: '',
    options: [
      {
        value: 'public',
        title: 'Public',
      },
      {
        value: 'private',
        title: 'Private',
      },
    ],
  },
];
