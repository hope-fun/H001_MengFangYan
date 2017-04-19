//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 *  GUI 组件示例
 *  逻辑类:    src/scene/Showcase.ts
 *  皮肤:      src/skins/scene/ShowcaseSkin.exml
 *
 *  GUI component showcase
 *  Logic class:    src/scene/Showcase.ts
 *  Skin:           src/skins/scene/ShowcaseSkin.exml
 */
var ViewModel;
(function (ViewModel) {
    var LogoVM = (function (_super) {
        __extends(LogoVM, _super);
        /*
         * 构造方法.
         */
        function LogoVM(_uiStage, _onCallBack) {
            _super.call(this);
            //  指定当前类的皮肤名称
            //  Assign the skin name used by this Component
            this.skinName = "View.LogoView";
            this.uiStage = _uiStage;
            this.onCallBack = _onCallBack;
            this.uiStage.addElement(this);
        }
        var __egretProto__ = LogoVM.prototype;
        /**
         所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
    
         All the components in the children and skin have been
         created and measured, you can use them now.
         */
        __egretProto__.childrenCreated = function () {
            this.onUIFadeInOut();
        };
        /*
         * Logo淡入淡出.
         */
        __egretProto__.onUIFadeInOut = function () {
            this.alpha = 0;
            var tw = egret.Tween.get(this);
            tw.to({ alpha: 1 }, 2000).to({ alpha: 0 }, 2000).call(this.onClose);
        };
        /*
         * 关闭并回调.
         */
        __egretProto__.onClose = function () {
            this.onCallBack();
            this.uiStage.removeElement(this);
        };
        return LogoVM;
    })(egret.gui.SkinnableComponent);
    ViewModel.LogoVM = LogoVM;
    LogoVM.prototype.__class__ = "ViewModel.LogoVM";
})(ViewModel || (ViewModel = {}));
