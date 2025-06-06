# CSS Guidelines

This file contains guidelines to follow when adding rules and properties to CSS stylesheets.

## Choosing Between `px` and `rem`

To streamline decision-making and ensure consistency, follow this rubric for selecting `px` or `rem` units:

1. **Use `rem` for typography-related properties and main container padding**:
   - **Applies to**: `font-size`, `line-height`, `padding` (text containers), `margin` (around text), `height`/`width` (text containers).
   - **Layout**: `padding` for the main container (the top-level container wrapping all page content, e.g., `.home-container`).
   - **Purpose**: Ensures scaling with root font size for accessibility and responsive design, especially for elements that influence text presentation across the entire page.
   - **Example**:

     ```css
     h2 {
       /* Scales with root font size. */
       font-size: 1.5rem;

      /* Spacing scales with text. */
       margin-bottom: 0.75rem; 
     }

     .home-container {
      /* Scales padding for main container. */
       padding: 2rem;
     }
     ```

2. **Use `px` for fixed or structural layout properties**:
   - **Applies to**: `margin` (layout containers), `padding` (non-text containers, excluding the main container), `border-width`, `width`/`height` (fixed elements), `top`/`left`/`right`/`bottom`.
   - **Purpose**: Provides precise, consistent measurements for layout and UI elements.
   - **Example**:

     ```css
     .gallery {
       /* Fixed spacing for layout consistency. */
       margin-top: 20px;
     }

     .button {
      /* Fixed button size. */
       width: 100px;
     }
     ```
