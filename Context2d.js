/*--------------------------------------------------------------------------------------------------------------------*/
// CANVASRENDERINGCONTEXT2D
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Context2d constructor
 * @class
 * @classdesc
 * 2d canvas context representation
 * @param canvas
 * @constructor
 */
function Context2d(canvas){
    this._ctx = canvas.getContext('2d');
}

/**
 * Saves the state of the current context.
 */
Context2d.prototype.save = function(){
    this._ctx.save();
};

/**
 * Returns previously saved context path state and attributes.
 */
Context2d.prototype.restore = function(){
    this._ctx.restore();
};

/**
 * Scales the current context by the specified horizontal (x) and vertical (y) factors.
 * @param v
 */
Context2d.prototype.scale = function(v){
    this._ctx.scale(v[0],v[1]);
};

/**
 * Scales the current context by the specified horizontal (x) and vertical (y) factors.
 * @param x
 * @param y
 */
Context2d.prototype.scale2 = function(x, y){
    this._ctx.scale(x,y);
};

/**
 * Rotates the current context coordinates (that is, a transformation matrix).
 * @param a
 */
Context2d.prototype.rotate = function(a){
    this._ctx.rotate(a);
};

/**
 * Specifies values to move the origin point in a canvas.
 * @param v
 */
Context2d.prototype.translate = function(v){
    this._ctx.translate(v[0],v[1]);
};

/**
 * Specifies values to move the origin point in a canvas.
 * @param x
 * @param y
 */
Context2d.prototype.translate2 = function(x,y){
    this._ctx.translate(x,y);
};

/**
 * Modifies the transformation matrix of the current context.
 * @param m
 */
Context2d.prototype.transform = function(m){
    this._ctx.transform(m[0],m[1],m[2],m[3],m[4],m[5]);
};

/**
 * Modifies the transformation matrix of the current context.
 * @param m11
 * @param m12
 * @param m21
 * @param m22
 * @param dx
 * @param dy
 */
Context2d.prototype.transform6 = function(m11,m12,m21,m22,dx,dy){
    this._ctx.transform(m11,m12,m21,m22,dx,dy);
};

/**
 * Resets the current transformation matrix of the context back to the identity matrix and then multiplies it by the specified matrix.
 * @param m
 */
Context2d.prototype.setTransform = function(m){
    this._ctx.setTransform(m[0],m[1],m[2],m[3],m[4],m[5]);
};

/**
 * Resets the current transformation matrix of the context back to the identity matrix and then multiplies it by the specified matrix.
 * @param m11
 * @param m12
 * @param m21
 * @param m22
 * @param dx
 * @param dy
 */
Context2d.prototype.setTransform = function(m11,m12,m21,m22,dx,dy){
    this._ctx.setTransform(m11,m12,m21,m22,dx,dy);
};

Object.defineProperties(Context2d.prototype, {
    globalAlpha : {
        /**
         * Sets the current alpha or transparency value that is applied to global composite rendering operations.
         * @scope instance
         * @custom_setter
         * @param globalAlpha
         */
        set : function(globalAlpha){
            this._ctx.globalAlpha = globalAlpha;
        },
        /**
         * Returns the current alpha or transparency value that is applied to global composite rendering operations.
         * @scope instance
         * @custom_getter
         * @returns {globalAlpha|{set, get}|*|number}
         */
        get : function(){
            return this._ctx.globalAlpha;
        }
    },
    globalCompositeOperation : {
        /**
         * Sets the value that indicates how source images are drawn onto a destination image.
         * @scope instance
         * @setter
         * @param globalCompositeOperation
         */
        set : function(globalCompositeOperation){
            this._ctx.globalCompositeOperation = globalCompositeOperation;
        },
        /**
         * Returns a value that indicates how source images are drawn onto a destination image.
         * @scope instance
         * @custom_getter
         * @returns {globalCompositeOperation|{set, get}|*|string}
         */
        get : function(){
            return this._ctx.globalCompositeOperation;
        }
    },
    strokeStyle : {
        /**
         * Sets the current style that is used for strokes (lines) on shapes
         * @scope instance
         * @setter
         * @param strokeStyle
         */
        set : function(strokeStyle){
            this._ctx.strokeStyle = strokeStyle;
        },
        /**
         * Returns the current style that is used for strokes (lines) on shapes
         * @scope instance
         * @custom_getter
         * @returns {strokeStyle|{set, get}|null|string|*|string}
         */
        get : function(){
            return this._ctx.strokeStyle;
        }
    },
    fillStyle : {
        /**
         * Sets the current style that is used to fill shapes.
         * @scope instance
         * @setter
         * @param fillStyle
         */
        set : function(fillStyle){
            this._ctx.fillStyle = fillStyle;
        },
        /**
         * Returns the current style that is used to fill shapes.
         * @scope instance
         * @custom_getter
         * @returns {fillStyle|{set, get}|null|string|String|CanvasGradient|CanvasPattern|*}
         */
        get : function(){
            return this._ctx.fillStyle;
        }
    }
});

/**
 * Creates an object that represents a linear gradient to use in a canvas context.
 * @param from
 * @param to
 * @returns {CanvasGradient}
 */
Context2d.prototype.createLinearGradient = function(from,to){
    return this._ctx.createLinearGradient(from[0],from[1],to[0],to[1]);
};

/**
 * Creates an object that represents a linear gradient to use in a canvas context.
 * @param x0
 * @param y0
 * @param x1
 * @param y1
 * @returns {CanvasGradient}
 */
Context2d.prototype.createLinearGradient4 = function(x0,y0,x1,y1){
    return this._ctx.createLinearGradient(x0,y0,x1,y1);
};

/**
 * Returns an object that represents a radial or circular gradient to use in a canvas context.
 * @param c0
 * @param r0
 * @param c1
 * @param r1
 * @returns {CanvasGradient}
 */
Context2d.prototype.createRadialGradient = function(c0,r0,c1,r1){
    return this._ctx.createRadialGradient(c0[0],c0[1],r0,c1[0],c1[1],r1);
};

/**
 * Returns an object that represents a radial or circular gradient to use in a canvas context.
 * @param x0
 * @param y0
 * @param r0
 * @param x1
 * @param y1
 * @param r1
 * @returns {CanvasGradient}
 */
Context2d.prototype.createRadialGradient6 = function(x0,y0,r0,x1,y1,r1){
    return this._ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
};

/**
 * Returns a CanvasPattern object that repeats the specified element in the specified direction.
 * @param image
 * @param repetition
 * @returns {CanvasPattern}
 */
Context2d.prototype.createPattern = function(image,repetition){
    return this._ctx.createPattern(image,repetition);
};

/**
 * Clears the pixels on a context object within a given rectangle.
 * @param p
 * @param s
 */
Context2d.prototype.clearRect = function(p,s){
    this._ctx.clearRect(p[0],p[1],s[0],s[1]);
};

/**
 * Clears the pixels on a context object within a given rectangle.
 * @param r
 */
Context2d.prototype.clearRectr = function(r){
    this._ctx.clearRect(r[0],r[1],r[2],r[3]);
};

/**
 * Clears the pixels on a context object within a given rectangle.
 * @param x
 * @param y
 * @param w
 * @param h
 */
Context2d.prototype.clearRect4 = function(x,y,w,h){
    this._ctx.clearRect(x,y,w,h);
};

/**
 * Paints a rectangle onto a context object by using the current fill style.
 * @param p
 * @param s
 */
Context2d.prototype.fillRect = function(p,s){
    this._ctx.fillRect(p[0],p[1],s[0],s[1]);
};

/**
 * Paints a rectangle onto a context object by using the current fill style.
 * @param r
 */
Context2d.prototype.fillRectr = function(r){
    this._ctx.fillRect(r[0],r[1],r[2],r[3]);
};

/**
 * Paints a rectangle onto a context object by using the current fill style.
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 */
Context2d.prototype.fillRect4 = function(x,y,w,h){
    this._ctx.fillRect(x,y,w,h);
};

/**
 * Creates an outline of the specified rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param p
 * @param s
 */
Context2d.prototype.strokeRect = function(p,s){
    this._ctx.strokeRect(p[0],p[1],s[0],s[1]);
};

/**
 * Creates an outline of the specified rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param r
 */
Context2d.prototype.strokeRectr = function(r){
    this._ctx.strokeRect(r[0],r[1],r[2],r[3]);
};

/**
 * Creates an outline of the specified rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param x
 * @param y
 * @param w
 * @param h
 */
Context2d.prototype.strokeRect4 = function(x,y,w,h){
    this._ctx.strokeRect(x,y,w,h);
};

/**
 * Paints a rounded rectangle onto a context object by using the current fill style.
 * @param rect
 * @param radius
 */
Context2d.prototype.fillRoundRect = function(rect,radius){
    this.fillRoundRect2(rect[0],rect[1],rect[2],rect[3],radius);
};

/**
 * Paints a rounded rectangle onto a context object by using the current fill style.
 * @param origin
 * @param size
 * @param radius
 */
Context2d.prototype.fillRoundRect2v = function(origin,size,radius){
    this.fillRoundRect2(origin[0],origin[1],size[0],size[1],radius);
};

/**
 * Paints a rounded rectangle onto a context object by using the current fill style.
 * @param x
 * @param y
 * @param width
 * @param height
 * @param radius
 */
Context2d.prototype.fillRoundRect2 = function(x,y,width,height,radius){
    this._ctx.beginPath();
    this.roundRect2(x,y,width,height,radius);
    this._ctx.fill();
};

/**
 * Creates an outline of a rounded rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param rect
 * @param radius
 */
Context2d.prototype.strokeRoundRect = function(rect,radius){
    this.strokeRoundRect2(rect[0],rect[1],rect[2],rect[3],radius);
};

/**
 * Creates an outline of a rounded rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param origin
 * @param size
 * @param radius
 */
Context2d.prototype.strokeRoundRect2v = function(origin,size,radius){
    this.strokeRoundRect2(origin[0],origin[1],size[0],size[1],radius);
};

/**
 * Creates an outline of a rounded rectangle on a canvas by using the current stroke, line width, and join styles.
 * @param x
 * @param y
 * @param width
 * @param height
 * @param radius
 */
Context2d.prototype.strokeRoundRect2 = function(x,y,width,height,radius){
    this._ctx.beginPath();
    this.roundRect2(x,y,width,height,radius);
    this._ctx.stroke();
};

/**
 * Resets the current path.
 */
Context2d.prototype.beginPath = function(){
    this._ctx.beginPath();
};

/**
 * Fills subpaths by using the current fill style.
 * @param fillRule
 */
Context2d.prototype.fill = function(fillRule){
    this._ctx.fill(fillRule);
};

/**
 * Renders the strokes of the current subpath by using the current stroke styles.
 */
Context2d.prototype.stroke = function(){
    this._ctx.stroke();
};

/**
 *
 * @param element
 */
Context2d.prototype.drawFocusIfNeeded = function(element){
    this._ctx.drawFocusIfNeeded(element);
};

/**
 * Specifies a new clipping region.
 */
Context2d.prototype.clip = function(){
    this._ctx.clip();
};

/**
 * Determines if the specified point is in the current path.
 * @param p
 * @returns {boolean}
 */
Context2d.prototype.isPointInPath = function(p){
    return this._ctx.isPointInPath(p[0],p[1]);
};

/**
 *
 * @param x
 * @param y
 * @returns {boolean}
 */
Context2d.prototype.isPointInPath2 = function(x,y){
    return this._ctx.isPointInPath(x,y);
};

/**
 * Renders filled text to the canvas by using the current fill style and font.
 * @param text
 * @param p
 * @param maxWidth
 */
Context2d.prototype.fillText = function(text,p,maxWidth){
    this._ctx.fillText(text,p[0],p[1],maxWidth);
};

/**
 * Renders filled text to the canvas by using the current fill style and font.
 * @param text
 * @param x
 * @param y
 * @param maxWidth
 */
Context2d.prototype.fillText2 = function(text,x,y,maxWidth){
    this._ctx.fillText(text,x,y,maxWidth);
};

/**
 * Renders the specified text at the specified position by using the current font, lineWidth, and strokeStyle property.
 * @param text
 * @param p
 * @param maxWidth
 */
Context2d.prototype.strokeText = function(text,p,maxWidth){
    this._ctx.strokeText(text,p[0],p[1],maxWidth);
};

/**
 * Renders the specified text at the specified position by using the current font, lineWidth, and strokeStyle property.
 * @param text
 * @param x
 * @param y
 * @param maxWidth
 */
Context2d.prototype.strokeText2 = function(text,x,y,maxWidth){
    this._ctx.strokeText(text,x,y,maxWidth);
};

/**
 * Returns a CanvasTextMetrics object that contains the width of the specified text.
 * @param text
 * @returns {TextMetrics}
 */
Context2d.prototype.measureText = function(text){
    return this._ctx.measureText(text);
};

/**
 * Draws a specified image onto a canvas.
 * @param image
 * @param dp_or_sp
 * @param ds_or_ss
 * @param dp
 * @param ds
 */
Context2d.prototype.drawImage = function(image,dp_or_sp,ds_or_ss,dp,ds){
    if(ds_or_ss === undefined){
        this._ctx.drawImage(image,dp_or_sp[0],dp_or_sp[1]);
        return;
    }
    if(dp === undefined){
        this._ctx.drawImage(image,dp_or_sp[0],dp_or_sp[1],ds_or_ss[0],ds_or_ss[1]);
        return;
    }
    this._ctx.drawImage(image,dp_or_sp[0],dp_or_sp[1],
        ds_or_ss[0],ds_or_ss[1],
        dp[0],dp[1],ds[0],ds[1]);
};

/**
 * Returns a CanvasImageData object with the given dimensions in CSS pixels.
 * @param s_or_imagedata
 * @returns {ImageData}
 */
Context2d.prototype.createImageData = function(s_or_imagedata){
    if(s_or_imagedata instanceof ImageData){
        return this._ctx.createImageData(s_or_imagedata);
    }
    return this._ctx.createImageData(s_or_imagedata[0],s_or_imagedata[1]);
};

/**
 * Returns a CanvasImageData object with the given dimensions in CSS pixels.
 * @param sx
 * @param sy
 * @returns {ImageData}
 */
Context2d.prototype.createImageData2 = function(sx,sy){
    return this._ctx.createImageData(sx,sy);
};

/**
 * Returns an ICanvasImageData object that represents the pixel data for the specified rectangle on a canvas. Use the data property to get a CanvasPixelArray to manipulate individual pixel data.
 * @param sp
 * @param ss
 * @returns {ImageData}
 */
Context2d.prototype.getImageData = function(sp,ss){
    return this._ctx.getImageData(sp[0],sp[1],ss[0],ss[1]);
};

/**
 *
 * @param sx
 * @param sy
 * @param sw
 * @param sh
 * @returns {ImageData}
 */
Context2d.prototype.getImageData4 = function(sx,sy,sw,sh){
    return this._ctx.getImageData(sx,sy,sw,sh);
};

/**
 * Paints the data from a specified CanvasImageData object onto a canvas.
 * @param imagedata
 * @param dp
 * @param dirtydp
 * @param dirtyds
 */
Context2d.prototype.putImageData = function(imagedata,dp,dirtydp,dirtyds){
    if(dirtydp === undefined){
        this._ctx.putImageData(imagedata,dp[0],dp[1]);
        return;
    }
    this._ctx.putImageData(imagedata,dp[0],dp[1],
        dirtydp[0],dirtydp[1],
        dirtyds[0],dirtyds[1]);
};

Object.defineProperties(Context2d.prototype, {
    lineWidth : {
        /**
         * Sets the current line width in pixels.
         * @scope instance
         * @custom_setter
         * @param lineWidth
         */
        set : function(lineWidth){
            this._ctx.lineWidth = lineWidth;
        },
        /**
         * Returns the current line width in pixels.
         * @scope instance
         * @custom_getter
         * @returns {*}
         */
        get : function(){
            return this._ctx.lineWidth;
        }
    },
    lineCap : {
        /**
         * Sets the current line cap style.
         * @scope instance
         * @custom_setter
         * @param lineCap
         */
        set : function(lineCap){
            this._ctx.lineCap = lineCap;
        },
        /**
         * Returns the current line cap style.
         * @scope instance
         * @custom_getter
         * @returns {lineCap|{set, get}|null|string|*|string}
         */
        get : function(){
            return this._ctx.lineCap;
        }
    },
    lineJoin : {
        /**
         * Sets the type type of corner that is created when two lines meet.
         * @scope instance
         * @custom_setter
         * @param lineJoin
         */
        set : function(lineJoin){
            this._ctx.lineJoin = lineJoin;
        },
        /**
         * Returns the type type of corner that is created when two lines meet.
         * @scope instance
         * @custom_getter
         * @returns {lineJoin|{set, get}|null|string|*|string}
         */
        get : function(){
            return this._ctx.lineJoin;
        }
    },
    miterLimit : {
        /**
         * Sets the maximum allowed ratio between half of the lineWidth value and the miter length.
         * @scope instance
         * @custom_setter
         * @param miterLimit
         */
        set : function(miterLimit){
            miterLimit.fillStyle = miterLimit;
        },
        /**
         * Returns the maximum allowed ratio between half of the lineWidth value and the miter length.
         * @scope instance
         * @custom_getter
         * @returns {miterLimit|{set, get}|null|string|Number}
         */
        get : function(){
            return this._ctx.miterLimit;
        }
    }
});

/**
 * Sets the current line dash pattern. The argument is a even numbered list of distances to alternately produce a line and a space.
 * @param a
 */
Context2d.prototype.setLineDash = function(a){
    this._ctx.setLineDash(a);
};

/**
 * Gets the current dash list sequence.
 */
Context2d.prototype.getLineDash = function(){
    return this._ctx.getLineDash();
};

/**
 * Sets or gets the phase offset of the current line dash pattern. Can be changed to produce "marching ants" animation like marching ants.
 */
Object.defineProperty(Context2d.prototype,'lineDashOffset',{
    set : function(lineDashOffset){
        this._ctx.lineDashOffset = lineDashOffset;
    },
    get : function(){
        return this._ctx.lineDashOffset;
    }
});

Object.defineProperties(Context2d.prototype,{
    font : {
        /**
         * Sets the current font for the context.
         * @scope instance
         * @custom_setter
         * @param font
         */
        set : function(font){
            this._ctx.font = font;
        },
        /**
         * Returns the current font for the context.
         * @scope instance
         * @custom_getter
         * @returns {font|{set, get}|*|string}
         */
        get : function(){
            return this._ctx.font;
        }
    },
    textAlign : {
        /**
         * Sets the current anchor point or alignment settings for text in the current context.
         * @scope instance
         * @custom_setter
         * @param textAlign
         */
        set : function(textAlign){
            this._ctx.textAlign = textAlign;
        },
        /**
         * Returns the current anchor point or alignment settings for text in the current context.
         * @scope instance
         * @custom_getter
         * @returns {textAlign|{set, get}|*|string}
         */
        get : function(){
            return this._ctx.textAlign;
        }
    },
    textBaseline : {
        /**
         * Sets the current settings for the font baseline alignment.
         * @scope instance
         * @custom_setter
         * @param textBaseline
         */
        set : function(textBaseline){
            this._ctx.textBaseline = textBaseline;
        },
        /**
         * Returns the current settings for the font baseline alignment.
         * @scope instance
         * @custom_getter
         * @returns {textBaseline|{set, get}|*|string}
         */
        get : function(){
            return this._ctx.textBaseline;
        }
    }
});

/**
 * Closes the current subpath and starts a new subpath that has a start point that is equal to the end of the closed subpath.
 */
Context2d.prototype.closePath = function(){
    this._ctx.closePath();
};

/**
 * Creates a new subpath by using the specified point.
 * @param v
 */
Context2d.prototype.moveTo = function(v){
    this._ctx.moveTo(v[0],v[1]);
};

/**
 * Creates a new subpath by using the specified point.
 * @param x
 * @param y
 */
Context2d.prototype.moveTo2 = function(x,y){
    this._ctx.moveTo(x,y);
};

/**
 * Adds a new point to a subpath and connects that point to the last point in the subpath by using a straight line.
 * @param v
 */
Context2d.prototype.lineTo = function(v){
    this._ctx.lineTo(v[0],v[1]);
};

/**
 * Adds a new point to a subpath and connects that point to the last point in the subpath by using a straight line.
 * @param x
 * @param y
 */
Context2d.prototype.lineTo2 = function(x,y){
    this._ctx.lineTo(x,y);
};

/**
 * Adds a point to the current subpath by using the specified control points that represent a quadratic Bézier curve.
 * @param cp
 * @param p
 */
Context2d.prototype.quadraticCurveTo = function(cp,p){
    this._ctx.quadraticCurveTo(cp[0],cp[1],p[0],p[1]);
};

/**
 * Adds a point to the current subpath by using the specified control points that represent a quadratic Bézier curve.
 * @param cpx
 * @param cpy
 * @param x
 * @param y
 */
Context2d.prototype.quadraticCurveTo4 = function(cpx,cpy,x,y){
    this._ctx.quadraticCurveTo(cpx,cpy,x,y);
};

/**
 * Adds a point to the current subpath by using the specified control points that represent a cubic Bézier curve.
 * @param cp1
 * @param cp2
 * @param p
 */
Context2d.prototype.bezierCurveTo = function(cp1,cp2,p){
    this._ctx.bezierCurveTo(cp1[0],cp1[1],cp2[0],cp2[1],p[0],p[1]);
};

/**
 * Adds a point to the current subpath by using the specified control points that represent a cubic Bézier curve.
 * @param cp1x
 * @param cp1y
 * @param cp2x
 * @param cp2y
 * @param x
 * @param y
 */
Context2d.prototype.bezierCurveTo6 = function(cp1x,cp1y,cp2x,cp2y,x,y){
    this._ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
};

/**
 * Draws an arc of a fixed radius between two tangents that are defined by the current point in a path and two additional points.
 * @param p1
 * @param p2
 * @param r
 */
Context2d.prototype.arcTo = function(p1,p2,r){
    this._ctx.arcTo(p1[0],p1[2],p2[0],p2[1],r);
};

/**
 * Draws an arc of a fixed radius between two tangents that are defined by the current point in a path and two additional points.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param r
 */
Context2d.prototype.arcTo4 = function(x1,y1,x2,y2,r){
    this._ctx.arcTo(x1,y1,x2,y2,r);
};

/**
 * Creates a new closed rectangular subpath.
 * @param p
 * @param s
 */
Context2d.prototype.rect = function(p,s){
    this._ctx.rect(p[0],p[1],s[0],s[1]);
};

/**
 * Creates a new closed rectangular subpath.
 * @param x
 * @param y
 * @param w
 * @param h
 */
Context2d.prototype.rect4 = function(x,y,w,h){
    this._ctx.rect(x,y,w,h);
};

/**
 * Creates a new closed rectangular subpath.
 * @param r
 */
Context2d.prototype.rectr = function(r){
    this._ctx.rect(r[0],r[1],r[2],r[3]);
};

/**
 * Creates a new close rounded rectangular subpath.
 * @param rect
 * @param radius
 */
Context2d.prototype.roundRect = function(rect,radius){
    this.roundRect2(rect[0],rect[1],rect[2],rect[3],radius);
};

/**
 * Creates a new close rounded rectangular subpath.
 * @param origin
 * @param size
 * @param radius
 */
Context2d.prototype.roundRect2v = function(origin,size,radius){
    this.roundRect2(origin[0],origin[1],size[0],size[1],radius);
};

/**
 * Creates a new close rounded rectangular subpath.
 * @param x
 * @param y
 * @param width
 * @param height
 * @param radius
 */
Context2d.prototype.roundRect2 = function(x,y,width,height,radius){
    radius = radius || 0;
    radius = width < (2 * radius) ? width * 0.5 : radius;
    radius = height < (2 * radius) ? height * 0.5 : radius;

    const xw = x + width;
    const yh = y + height;

    this._ctx.moveTo(x + radius, y);
    this._ctx.arcTo(xw, y, xw, yh, radius);
    this._ctx.arcTo(xw, yh, x, yh, radius);
    this._ctx.arcTo(x, yh, x, y, radius);
    this._ctx.arcTo(x, y, xw, y, radius);
    this._ctx.closePath();
};

/**
 * Adds points to a path that represents an arc.
 * @param p
 * @param radius
 * @param startAngle
 * @param endAngle
 * @param counterclockwise
 */
Context2d.prototype.arc = function(p,radius,startAngle,endAngle,counterclockwise){
    this._ctx.arc(p[0],p[1],radius,startAngle,endAngle,counterclockwise);
};

/**
 * Adds points to a path that represents an arc.
 * @param x
 * @param y
 * @param radius
 * @param startAngle
 * @param endAngle
 * @param counterclockwise
 */
Context2d.prototype.arc2 = function(x,y,radius,startAngle,endAngle,counterclockwise){
    this._ctx.arc(x,y,radius,startAngle,endAngle,counterclockwise);
};

Object.defineProperties(Context2d.prototype,{
    shadowOffsetX : {
        /**
         * Sets the horizontal distance of a shadow from a shape.
         * @scope instance
         * @custom_setter
         * @param shadowOffsetX
         */
        set : function(shadowOffsetX){
            this._ctx.shadowOffsetX = shadowOffsetX;
        },
        /**
         * Returns the horizontal distance of a shadow from a shape.
         * @scope instance
         * @custom_getter
         * @returns {shadowOffsetX|{set, get}|*|Number}
         */
        get : function(){
            return this._ctx.shadowOffsetX;
        }
    },
    shadowOffsetY : {
        /**
         * Sets the vertical distance of a shadow from a shape.
         * @scope instance
         * @custom_setter
         * @param shadowOffsetY
         */
        set : function(shadowOffsetY){
            this._ctx.shadowOffsetY = shadowOffsetY;
        },
        /**
         * Returns the vertical distance of a shadow from a shape.
         * @scope instance
         * @custom_getter
         * @returns {shadowOffsetY|{set, get}|*|Number}
         */
        get : function(){
            return this._ctx.shadowOffsetY;
        }
    },
    shadowBlur : {
        /**
         * Sets the current level of blur that is applied to shadows.
         * @scope instance
         * @custom_setter
         * @param shadowBlur
         */
        set : function(shadowBlur){
            this._ctx.shadowBlur = shadowBlur;
        },
        /**
         * Returns the current level of blur that is applied to shadows.
         * @scope instance
         * @custom_getter
         * @returns {shadowBlur|{set, get}|*|Number}
         */
        get : function(){
            return this._ctx.shadowBlur;
        }
    },
    shadowColor : {
        /**
         * Sets the color to use for shadows.
         * @scope instance
         * @custom_setter
         * @param shadowColor
         */
        set : function(shadowColor){
            this._ctx.shadowBlur = shadowColor;
        },
        /**
         * Returns the color to use for shadows.
         * @scope instance
         * @custom_getter
         * @returns {shadowColor|{set, get}|string}
         */
        get : function(){
            return this._ctx.shadowColor;
        }
    }
});

/*--------------------------------------------------------------------------------------------------------------------*/
// EXTENSIONS
/*--------------------------------------------------------------------------------------------------------------------*/

Context2d.prototype.triangle = function(p0,p1,p2){
    this.triangle2(p0[0],p0[1],p1[0],p1[1],p2[0],p2[1]);
};

Context2d.prototype.triangle2 = function(x0,y0,x1,y1,x2,y2){
    this._ctx.moveTo(x0,y0);
    this._ctx.lineTo(x1,y1);
    this._ctx.lineTo(x2,y2);
};

Context2d.prototype.fillTriangle = function(p0,p1,p2){
    this.fillTriangle2(p0[0],p0[1],p1[0],p1[1],p2[0],p2[1]);
};

Context2d.prototype.fillTriangle2 = function(x0,y0,x1,y1,x2,y2){
    this._ctx.beginPath();
    this.triangle2(x0,y0,x1,y1,x2,y2);
    this._ctx.fill();
};

Context2d.prototype.strokeTriangle = function(p0,p1,p2){
    this.strokeTriangle2(p0[0],p0[1],p1[0],p1[1],p2[0],p2[1]);
};

Context2d.prototype.strokeTriangle2 = function(x0,y0,x1,y1,x2,y2){
    this._ctx.beginPath();
    this.triangle2(x0,y0,x1,y1,x2,y2);
    this._ctx.stroke();
};

/**
 * Creates new closed rectangular subpaths.
 * @param rects
 */
Context2d.prototype.rects = function(rects){
    for(let i = 0; i < rects.length; ++i){
        let rect = rects[i];
        this._ctx.rect(rect[0],rect[1],rect[2],rect[3]);
    }
};

/**
 * Creates new closed rectangular subpaths.
 * @param rects
 */
Context2d.prototype.rectsFlat = function(rects){
    for(let i = 0; i < rects.length; i+=4){
        this._ctx.rect(rects[i],rects[i+1],rects[i+2],rects[i+3]);
    }
};

/**
 * Creates and fills a series of rect subpaths.
 * @param rects
 */
Context2d.prototype.fillRects = function(rects){
    this._ctx.beginPath();
    this.rects(rects);
    this._ctx.fill();
};

/**
 * Creates and fills a series of rect subpaths.
 * @param rects
 */
Context2d.prototype.fillRectsFlat = function(rects){
    this._ctx.beginPath();
    this.rectsFlat(rects);
    this._ctx.fill();
};

/**
 * Creates a series of rect subpaths.
 * @param rects
 */
Context2d.prototype.strokeRects = function(rects){
    this._ctx.beginPath();
    this.rects(rects);
    this._ctx.stroke();
};

/**
 * Creates a series of rect subpaths.
 * @param rects
 */
Context2d.prototype.strokeRectsFlat = function(rects){
    this._ctx.beginPath();
    this.rectsFlat(rects);
    this._ctx.stroke();
};

/**
 * Creates a new closed circle subpath.
 * @param p
 * @param r
 */
Context2d.prototype.circle = function(p,r){
    let x = p[0];
    let y = p[1];
    this._ctx.moveTo(x+r,y);
    this._ctx.arc(x,y,r,0,Math.PI * 2);
};

/**
 * Creates a new closed circle subpath.
 * @param x
 * @param y
 * @param r
 */
Context2d.prototype.circle2 = function(x,y,r){
    this._ctx.arc(x,y,r,0,Math.PI * 2);
};

/**
 * Creates and fills a new closed circle subpath.
 * @param p
 * @param r
 */
Context2d.prototype.fillCircle = function(p,r){
    this._ctx.beginPath();
    this.circle(p,r);
    this._ctx.fill();
};

/**
 * Creates and fills a new closed circle subpath.
 * @param x
 * @param y
 * @param r
 */
Context2d.prototype.fillCircle2 = function(x,y,r){
    this._ctx.beginPath();
    this.circle2(x,y,r);
    this._ctx.fill();
};

/**
 * Creates and strokes a new closed circle subpath.
 * @param p
 * @param r
 */
Context2d.prototype.strokeCircle = function(p,r){
    this._ctx.beginPath();
    this.circle(p,r);
    this._ctx.stroke();
};

/**
 * Creates and strokes a new closed circle subpath.
 * @param x
 * @param y
 * @param r
 */
Context2d.prototype.strokeCircle2 = function(x,y,r){
    this._ctx.beginPath();
    this.circle2(x,y,r);
    this._ctx.stroke();
};


/**
 * Creates new closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.circles = function(circles,r){
    if(r === undefined){
        for(let i = 0; i < circles.length; ++i){
            let circle = circles[i];
            let x = circle[0];
            let y = circle[1];
                r = circle[2];

            this._ctx.moveTo(x+r,y);
            this._ctx.arc(x,y,r,0,Math.PI * 2);
        }
        return;
    }

    for(let i = 0; i < circles.length; ++i){
        let circle = circles[i];
        let x = circle[0];
        let y = circle[1];

        this._ctx.moveTo(x+r,y);
        this._ctx.arc(x,y,r,0,Math.PI * 2);
    }
};

/**
 * Creates and strokes closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.strokeCircles = function(circles,r){
    this._ctx.beginPath();
    this.circles(circles,r);
    this._ctx.stroke();
};

/**
 * Creates and fills closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.fillCircles = function(circles,r){
    this._ctx.beginPath();
    this.circles(circles,r);
    this._ctx.fill();
};

/**
 * Creates new closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.circlesFlat = function(circles,r){
    if(r === undefined){
        for(let i = 0; i < circles.length; i+=3){
            let x = circles[i];
            let y = circles[i+1];
                r = circles[i+2];

            this._ctx.moveTo(x+r,y);
            this._ctx.arc(x,y,r,0,Math.PI * 2);
        }
        return;
    }

    for(let i = 0; i < circles.length; i+=2){
        let x = circles[i  ];
        let y = circles[i+1];

        this._ctx.moveTo(x+r,y);
        this._ctx.arc(x,y,r,0,Math.PI * 2);
    }
};

/**
 * Creates and strokes closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.strokeCirclesFlat = function(circles,r){
    this._ctx.beginPath();
    this.circlesFlat(circles,r);
    this._ctx.stroke();
};

/**
 * Creates and fills closed circle subpaths.
 * @param circles
 * @param r
 */
Context2d.prototype.fillCirclesFlat = function(circles,r){
    this._ctx.beginPath();
    this.circlesFlat(circles,r);
    this._ctx.fill();
};

/**
 * Creates a new closed ellipse subpath.
 * @param p
 * @param radii
 */
Context2d.prototype.ellipse = function(p,radii){
    this.ellipse2(p[0],p[1],radii[0],radii[1]);
};

/**
 * Creates a new closed ellipse subpath.
 * @param x
 * @param y
 * @param rx
 * @param ry
 */
Context2d.prototype.ellipse2 = function(x,y,rx,ry){
    this._ctx.moveTo(x, y - ry);

    this._ctx.bezierCurveTo(
        x + rx, y - ry,
        x + rx, y + ry,
        x, y + ry
    );

    this._ctx.bezierCurveTo(
        x - rx, y + ry,
        x - rx, y - ry,
        x, y - ry
    );
};

/**
 * Creates and fills a new closed ellipse subpath.
 * @param p
 * @param radii
 */
Context2d.prototype.fillEllipse = function(p,radii){
    this._ctx.beginPath();
    this.ellipse(p,radii);
    this._ctx.fill();
};

/**
 * Creates and fills a new closed ellipse subpath.
 * @param x
 * @param y
 * @param rx
 * @param ry
 */
Context2d.prototype.fillEllipse2 = function(x,y,rx,ry){
    this._ctx.beginPath();
    this.ellipse2(x,y,rx,ry);
    this._ctx.fill();
};

/**
 * Creates and strokes a new closed ellipse subpath.
 * @param p
 * @param radii
 */
Context2d.prototype.strokeEllipse = function(p,radii){
    this._ctx.beginPath();
    this.ellipse(p,radii);
    this._ctx.stroke();
};

/**
 * Creates and strokes a new closed ellipse subpath.
 * @param x
 * @param y
 * @param rx
 * @param ry
 */
Context2d.prototype.strokeEllipse2 = function(x,y,rx,ry){
    this._ctx.beginPath();
    this.ellipse2(x,y,rx,ry);
    this._ctx.stroke();
};

/**
 * Creates new closed ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.ellipses = function(ellipses,rx,ry){
    if(rx === undefined){
        for(let i = 0; i < ellipses.length; ++i){
            let ellipse = ellipses[i];
            let x = ellipse[0];
            let y = ellipse[1];

            this._ctx.moveTo(x, y - ry);

            this._ctx.bezierCurveTo(
                x + rx, y - ry,
                x + rx, y + ry,
                x, y + ry
            );

            this._ctx.bezierCurveTo(
                x - rx, y + ry,
                x - rx, y - ry,
                x, y - ry
            );
        }
        return;
    }

    for(let i = 0; i < ellipses.length; ++i){
        let ellipse = ellipses[i];
        let x = ellipse[0];
        let y = ellipse[1];
        rx = ellipse[2];
        ry = ellipse[3];

        this._ctx.moveTo(x, y - ry);

        this._ctx.bezierCurveTo(
            x + rx, y - ry,
            x + rx, y + ry,
            x, y + ry
        );

        this._ctx.bezierCurveTo(
            x - rx, y + ry,
            x - rx, y - ry,
            x, y - ry
        );
    }
};

/**
 * Creates new closed ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.ellipsesFlat = function(ellipses,rx,ry){
    if(rx === undefined){
        for(let i = 0; i < ellipses.length; i+=2){
            let x = ellipses[i];
            let y = ellipses[i+1];

            this._ctx.moveTo(x, y - ry);

            this._ctx.bezierCurveTo(
                x + rx, y - ry,
                x + rx, y + ry,
                x, y + ry
            );

            this._ctx.bezierCurveTo(
                x - rx, y + ry,
                x - rx, y - ry,
                x, y - ry
            );
        }
        return;
    }

    for(let i = 0; i < ellipses.length; i+=4){
        let x = ellipses[i];
        let y = ellipses[i+1];
        rx = ellipses[i+2];
        ry = ellipses[i+3];

        this._ctx.moveTo(x, y - ry);

        this._ctx.bezierCurveTo(
            x + rx, y - ry,
            x + rx, y + ry,
            x, y + ry
        );

        this._ctx.bezierCurveTo(
            x - rx, y + ry,
            x - rx, y - ry,
            x, y - ry
        );
    }
};

/**
 * Creates and fills a series of ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.fillEllipses = function(ellipses,rx,ry){
    this._ctx.beginPath();
    this.ellipses(ellipses);
    this._ctx.fill();
};

/**
 * Creates and strokes a series of ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.strokeEllipses = function(ellipses){
    this._ctx.beginPath();
    this.ellipses(ellipses);
    this._ctx.stroke();
};

/**
 * Creates and fills a series of ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.fillEllipsesFlat = function(ellipses){
    this._ctx.beginPath();
    this.ellipsesFlat(ellipses);
    this._ctx.fill();
};

/**
 * Creates and strokes a series of ellipse subpaths.
 * @param ellipses
 */
Context2d.prototype.strokeEllipsesFlat = function(ellipses){
    this._ctx.beginPath();
    this.ellipsesFlat(ellipses);
    this._ctx.stroke();
};

/**
 * Creates a new linestrip subpath.
 * @param points
 */
Context2d.prototype.lineStrip = function(points){
    this._ctx.moveTo(points[0][0],points[0][1]);
    for(let i = 1; i < points.length; ++i){
        let point = points[i];
        this._ctx.lineTo(point[0],point[1]);
    }
};

/**
 * Creates a new linestrip subpath.
 * @param points
 */
Context2d.prototype.lineStripFlat = function(points){
    this._ctx.moveTo(points[0],points[1]);
    for(let i = 2; i < points.length; i+=2){
        this._ctx.lineTo(points[i],points[i+1]);
    }
};

/**
 * Creates and strokes a new linestrip path.
 * @param points
 */
Context2d.prototype.strokeLineStrip = function(points){
    this._ctx.beginPath();
    this.lineStrip(points);
    this._ctx.stroke();
};

/**
 * Creates and strokes a new linestrip path.
 * @param points
 */
Context2d.prototype.strokeLineStripFlat = function(points){
    this._ctx.beginPath();
    this.lineStripFlat(points);
    this._ctx.stroke();
};

/**
 * Creates new line subpaths.
 * @param lines
 */
Context2d.prototype.lines = function(lines){
    for(let i = 0; i < lines.length; i+=2){
        let a = lines[i];
        let b = lines[i+1];
        this._ctx.moveTo(a[0],a[1]);
        this._ctx.lineTo(b[0],b[1]);
    }
};

/**
 * Creates a new horizontal line subpath.
 * @param x1
 * @param x2
 * @param y
 */
Context2d.prototype.lineH = function(x1,x2,y){
    this._ctx.moveTo(x1,y);
    this._ctx.lineTo(x2,y);
};

/**
 * Creates a new vertical line subpath.
 * @param x
 * @param y1
 * @param y2
 */
Context2d.prototype.lineV = function(x,y1,y2){
    this._ctx.moveTo(x,y1);
    this._ctx.lineTo(x,y2);
};

/**
 * Creates new line subpaths.
 * @param lines
 */
Context2d.prototype.linesFlat = function(lines){
    for(let i = 0; i < lines.length; i+=4){
        this._ctx.moveTo(lines[i],lines[i+1]);
        this._ctx.lineTo(lines[i+2],lines[i+3]);
    }
};

/**
 * Creates and strokes a new lines path.
 * @param lines
 */
Context2d.prototype.strokeLines = function(lines){
    this._ctx.beginPath();
    this.lines(lines);
    this._ctx.stroke();
};

/**
 * Creates and strokes a new lines path.
 * @param lines
 */
Context2d.prototype.strokeLinesFlat = function(lines){
    this._ctx.beginPath();
    this.linesFlat(lines);
    this._ctx.stroke();
};

/**
 * Creates a new polygon subpath.
 * @param points
 */
Context2d.prototype.polygon = function(points){
    this.lineStrip(points);
    let back = points[points.length - 1];
    this._ctx.lineTo(back[0],back[1]);
};

/**
 * Creates a new line subpath.
 * @param a
 * @param b
 */
Context2d.prototype.line = function(a,b){
    this._ctx.moveTo(a[0],a[1]);
    this._ctx.lineTo(b[0],b[1]);
};

/**
 * Creates a new line subpath.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
Context2d.prototype.line4 = function(x1,y1,x2,y2){
    this._ctx.moveTo(x1,y1);
    this._ctx.lineTo(x2,y2);
};

/**
 * Creates a new polygon subpath.
 * @param points
 */
Context2d.prototype.polygonFlat = function(points){
    this.lineStripFlat(points);
    this._ctx.lineTo(points[points.length-2],points[points.length-1]);
};

/**
 * Creates and strokes a new polygon subpath.
 * @param points
 */
Context2d.prototype.strokePolygon = function(points){
    this._ctx.beginPath();
    this.polygon(points);
    this._ctx.stroke();
};

/**
 * Creates and fills a new polygon subpath.
 * @param points
 */
Context2d.prototype.fillPolygon = function(points){
    this._ctx.beginPath();
    this.polygon(points);
    this._ctx.fill();
};

/**
 * Creates and strokes a new polygon subpath.
 * @param points
 */
Context2d.prototype.strokePolygonFlat = function(points){
    this._ctx.beginPath();
    this.polygonFlat(points);
    this._ctx.stroke();
};

/**
 * Creates and fills a new polygon subpath.
 * @param points
 */
Context2d.prototype.fillPolygonFlat = function(points){
    this._ctx.beginPath();
    this.polygonFlat(points);
    this._ctx.fill();
};

/**
 * Creates a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.polygons = function(polygons){
    for(let i = 0; i < polygons.length; ++i){
        this.polygon(polygons[i]);
    }
};

/**
 * Creates a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.polygonsFlat = function(polygons){
    for(let i = 0; i < polygons.length; ++i){
        this.polygonsFlat(polygons[i]);
    }
};

/**
 * Creates and strokes a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.strokePolygons = function(polygons){
    this._ctx.beginPath();
    this.polygons(polygons);
    this._ctx.stroke();
};

/**
 * Creates and fills a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.fillPolygons = function(polygons){
    this._ctx.beginPath();
    this.polygons(polygons);
    this._ctx.fill();
};

/**
 * Creates and strokes a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.strokePolygonsFlat = function(polygons){
    this._ctx.beginPath();
    this.polygonsFlat(polygons);
    this._ctx.stroke();
};

/**
 * Creates and fills a series of polygon subpaths.
 * @param polygons
 */
Context2d.prototype.fillPolygonsFlat = function(polygons){
    this._ctx.beginPath();
    this.polygonsFlat(polygons);
    this._ctx.fill();
};

/*--------------------------------------------------------------------------------------------------------------------*/
// UTILS
/*--------------------------------------------------------------------------------------------------------------------*/

/**
 * Creates a grid path.
 * @param size
 * @param subdivs
 * @param pp
 */
Context2d.prototype.grid = function(size,subdivs,pp){
    this.grid4(size[0],size[1],subdivs[0],subdivs[1],pp);
};

/**
 * Creates a grid path.
 * @param w
 * @param h
 * @param sx
 * @param sy
 * @param pp
 */
Context2d.prototype.grid4 = function(w,h,sx,sy,pp){
    pp = pp === undefined ? true : pp;

    sx = sx + 1;
    sy = sy + 1;

    let x = 0;
    let y = 0;
    let stepx = w / (sx - 1);
    let stepy = h / (sy - 1);

    if(pp){
        stepx = Math.floor(stepx);
        stepy = Math.floor(stepy);
        x = 0.5;
        y = 0.5;
    }

    this._ctx.save();
    this._ctx.translate(x,y);
    this._ctx.beginPath();
    for(let i = 0; i < sx; ++i){
        this.lineV(stepx * i,0,h);
    }
    for(let i = 0; i < sy; ++i){
        this.lineH(0,w,stepy * i);
    }
    this._ctx.stroke();
    this._ctx.restore();
};

/**
 * Creates an axes representation.
 * @param length
 * @param size
 */
Context2d.prototype.axes = function(length,size){
    this._ctx.save();
    this._ctx.strokeStyle = '#ff0000';
    this.debugVector2(1,0,length,size);
    this._ctx.strokeStyle = '#ffff00';
    this.debugVector2(0,1,length,size);
    this._ctx.restore();
};

/**
 * Creates a debug vector representation.
 * @param v
 * @param length
 * @param size
 */
Context2d.prototype.debugVector = function(v, length, size){
    this.debugVector2(v[0],v[1],length,size);
};

/**
 * Creates a debug vector representation.
 * @param x
 * @param y
 * @param length
 * @param size
 */
Context2d.prototype.debugVector2 = function(x, y, length, size){
    length = length === undefined ? 10 : length;
    size   = size === undefined ? 2 : size;

    const headSize  = 3 * size;
    const headWidth = headSize * 0.65;
    const headInset = length - headSize;

    this._ctx.save();
    this._ctx.fillStyle = this._ctx.strokeStyle;
    this._ctx.lineCap = 'round';
    this._ctx.lineWidth = size;
    this._ctx.rotate(Math.atan2(y,x));
    this._ctx.beginPath();
    this.line4(0,0,length - headWidth,0);
    this._ctx.stroke();
    this._ctx.beginPath();
    this._ctx.moveTo(headInset,-headWidth);
    this._ctx.lineTo(length,0);
    this._ctx.lineTo(headInset, headWidth);
    this._ctx.fill();
    this._ctx.restore();
};

/**
 * Creates a debug rect representation.
 * @param rect
 */
Context2d.prototype.debugRect = function(rect){
    this._ctx.save();
    this.strokeRectr(rect);
    this.fillCircle2(rect[0],rect[1],3);
    this._ctx.restore();
};

/*--------------------------------------------------------------------------------------------------------------------*/
// OPTIONAL SHARED CONTEXT
/*--------------------------------------------------------------------------------------------------------------------*/

Context2d.prototype.makeShared = function(){
    Context2d.__sharedContext = this;
};

Context2d.sharedContext = function(){
    return Context2d.__sharedContext;
};

Context2d.__sharedContext = null;

/*--------------------------------------------------------------------------------------------------------------------*/
// EXPORT
/*--------------------------------------------------------------------------------------------------------------------*/

export default Context2d;