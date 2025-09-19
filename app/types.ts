
/**
 * Questions that got me to this understanding/types
 * 
 * - what is the difference between a Course and a Module?!?!
 * - what can I do in a Course that I can't do in a module?!?!
 * - is it about timing and/or class coordination/participation?!?!
 * - if I can move between the two easily, what circumstances should 
 * I want to be in one over the other?
 * 
 * ...maybe courses should be the containers for social spaces
 * ie. forums, cohorts, etc
 */

// Persistent (DB) types

/**
 * entities that exist on their own and can be previewed
 * given the right context 
 * 
 * NOTE: the title will generally be visible in line with
 * other content but the description will be for whenever
 * it makes sense to have a popover explaining what the thing
 * is
 */
type Previewable<T> = {
    id: string,
    title: string,
    description?: string,
  } & T
  
  type Course = Previewable<{ content: CourseContent[] }>
  
  type Module = Previewable<{ content: Content[] }>
  
  type Resource = Previewable<{
    // ...
  }>
  
  // Helper/Inline types
  
  /**
   * NOTE: any type in `CourseContent` should have a unique `contentType` property
   */
  type CourseContent = SocialContent | Content | ModuleContent
  
  type SocialContent = ForumContent | CohortContent  
  
  type Content = ResourceContent | MarkdownContent | ActivityContent
  
  /**
   * pointer to a module (the smallest unit of shareable/content)
   * 
   * NOTE: visually speaking, the internal Content is rendered inline
   * but has the context of the module so can have whatever UX we want
   * around that ie. breadcrumbs or being able to navigate to the module etc.
   */
  type ModuleContent = {
    contentType: 'module'
    moduleId: string,
  }

  /**
   * Forum configurations that allow for multiple forums per 
   * course to be targeting whatever topic with different
   * features/settings
   */
  type ForumContent = {
    contentType: 'forum'
    // ...
  }
  
  /**
   * Things like class/cohort specific schedules, hw, forums
   * etc...anything that makes sense to be tied to a specific
   * cohort of people in time
   */
  type CohortContent = {
    contentType: 'cohort'
    // ...
  }
  
  /**
   * A pointer to a resource which could be a myriad of mediums
   * ie. pdf, image, video, audio, etc.
   */
  type ResourceContent = {
    contentType: 'resource',
    resourceId: string
  }
  
  /**
   * Allow for any rich text supported by markdown 
   * (which we can apply our own styles to)
   */
  type MarkdownContent = {
    contentType: 'markdown',
    rawText: string
  }
  
  /**
   * Container for any general activity...could also break these out into
   * their own Content types for simplicity
   */
  type ActivityContent = {
    contentType: 'activity'
    actType: 'poll' | 'prompt' | 'quiz' 
    // ...
  }
  
  // Full Example of entities in DB
  const TheEndOfTheWorldAsWeKnowIt: Course = {
    id: 'TEOTWAWKI',
    title: 'The End of the World as we Know it',
    description: 'This course confronts the overlapping crises...',
    content: [
        // Introduction
        {
            contentType: 'markdown',
            rawText: `# Introduction
            
            Let's begin by reckoning with...`
        }, 
        {
            // Preparing for the end of the world as we know it
            contentType: 'resource',
            resourceId: '1'
        },
        {
            // Everything Is Everything, or How Black Women Will Survive the End of the World
            contentType: 'resource',
            resourceId: '2'
        },
        {
            // The World Keeps Ending, and the World Goes On
            contentType: 'resource',
            resourceId: '3'
        },
        // Converging Crisis
        {
            contentType: 'markdown',
            rawText: `# Converging Crisis`
        }, 
        {
            // The MAGA Era and Global Right-Wing Extremism
            contentType: 'module',
            moduleId: '10'
        },
        {
            // 21st Century War, Genocide, and State Violence
            contentType: 'module',
            moduleId: '11'
        }, 
        {
            contentType: 'markdown',
            rawText: `# Building the World Anew: Solidarity, Community, Mutual Aid, and Survival`
        },
        {
            // Radical Imagination
            contentType: 'module',
            moduleId: '12'
        },
        {
            // Solidarity
            contentType: 'module',
            moduleId: '13'
        }
        //...
    ]
  }
  
  const MAGAEra: Module = {
    id: '10',
    title: 'The MAGA Era and Global Right-Wing Extremism',
    description: 'From Project 2025...',
    content: [
        { contentType: 'resource', resourceId: '4' }, 
        { contentType: 'activity', actType : 'poll'},
        { contentType: 'resource', resourceId: '5' }, 
        { contentType: 'activity', actType : 'prompt'},
        { contentType: 'resource', resourceId: '6' },
        { contentType: 'activity', actType : 'quiz'},        
    ]
  }
  
  const TwentyFirstCenturyWar: Module = {
    id: '11',
    title: '21st Century War, Genocide, and State Violence',
    description: 'This module addresses the proliferation...',
    content: [
        { contentType: 'resource', resourceId: '7' }, 
        { contentType: 'activity', 'actType' : 'poll'},
        { contentType: 'resource', resourceId: '8' }, 
        { contentType: 'activity', 'actType' : 'prompt'},
        { contentType: 'resource', resourceId: '9' },
        { contentType: 'activity', 'actType' : 'quiz'},        
    ]
  }