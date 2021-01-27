import "carbon-components-svelte/css/all.css";
import "styles/add.css";
import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});