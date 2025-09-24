# How to Add Your Background Image

## Steps to add a custom background image:

1. **Place your image file** in the folder:
   `/Users/a0000/Downloads/reactfile/public/images/`

2. **Supported formats**: 
   - `.jpg` or `.jpeg`
   - `.png`
   - `.webp`
   - `.svg`

3. **Edit the CSS file**:
   Open `src/index.css` and find this line:
   ```css
   /* background-image: url('/images/your-background-image.jpg'); */
   ```

4. **Uncomment and update** with your image filename:
   ```css
   background-image: url('/images/your-image-name.jpg');
   ```

## Example:
If your image is called `medical-bg.jpg`, the line should be:
```css
background-image: url('/images/medical-bg.jpg');
```

## Recommended image specifications:
- **Resolution**: 1920x1080 or higher
- **File size**: Under 2MB for fast loading
- **Theme**: Medical/healthcare related

The app will automatically reload and show your background image!