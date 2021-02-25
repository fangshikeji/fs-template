<template>
	<view :class="[type, colorType, source === 'inner' ? 'wefont' : 'iconfont']" :style="style" @click="handleClick"></view>
</template>

<script>
	export default {
		props: {
			type: String,
			size: {
				type: String,
				default: '32rpx',
			},
			color: String,
			colorType: String,
			source: {
				type: String,
				default: 'inner'
			}
		},
		data() {
			return {

			};
		},
		computed: {
			style(data) {
				const {
					size,
					color
				} = data
				let style = `font-size: ${size};`

				if (color) {
					style += `color: ${color};`
				}
				return style
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/iconfont.css';
.wefont{
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
@font-face {font-family: "wefont";
  src: url('//at.alicdn.com/t/font_1546014_e7c4nph6a0h.eot?t=1608101849529'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1546014_e7c4nph6a0h.eot?t=1608101849529#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1546014_e7c4nph6a0h.woff?t=1608101849529') format('woff'),
  url('//at.alicdn.com/t/font_1546014_e7c4nph6a0h.ttf?t=1608101849529') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1546014_e7c4nph6a0h.svg?t=1608101849529#wefont') format('svg'); /* iOS 4.1- */
}

.wefont {
  font-family: "wefont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-del:before {
  content: "\e6ac";
}

.icon-image:before {
  content: "\e604";
}

.icon-tag:before {
  content: "\ecf0";
}

.icon-sex-male:before {
  content: "\e892";
}

.icon-sex-female:before {
  content: "\e893";
}

.icon-qr_code:before {
  content: "\e739";
}

.icon-time:before {
  content: "\e622";
}

.icon-star1:before {
  content: "\e650";
}

.icon-off:before {
  content: "\e621";
}

.icon-call:before {
  content: "\e613";
}

.icon-location:before {
  content: "\e620";
}

.icon-plus2:before {
  content: "\e6b3";
}

.icon-plus1:before {
  content: "\e7ba";
}

.icon-ArrowRight:before {
  content: "\e612";
}

.icon-plus:before {
  content: "\e60f";
}

.icon-star:before {
  content: "\e615";
}

.icon-square:before {
  content: "\e6d5";
}

.icon-squarecheck:before {
  content: "\e6d6";
}

.icon-photo:before {
  content: "\e710";
}

.icon-right:before {
  content: "\e64f";
}

.icon-d-down:before {
  content: "\e641";
}

.icon-checked:before {
  content: "\e61e";
}

.icon-uncheck:before {
  content: "\e61f";
}

.icon-Error:before {
  content: "\e600";
}

.icon-loading:before {
  content: "\e601";
}

.icon-mobile:before {
  content: "\e611";
}

.icon-more:before {
  content: "\e608";
}

.icon-search:before {
  content: "\e661";
}

.icon-feedback:before {
  content: "\e6f4";
}

.icon-edit:before {
  content: "\e609";
}

.icon-close:before {
  content: "\e670";
}

.icon-version:before {
  content: "\e60b";
}

.icon-pwd:before {
  content: "\e614";
}

.icon-msg:before {
  content: "\e659";
}

.icon-success:before {
  content: "\e6bd";
}
</style>
