import { Injectable } from '@angular/core';
import {beforeMethod, afterMethod, beforeStaticMethod, afterStaticMethod, beforeSetter, afterSetter, beforeGetter, afterGetter, Metadata} from 'aspect.js';

@Injectable()
export class LogAspect {

	before(meta: Metadata): void {
		if (meta.woveMetadata.debug) {
			console.log(`${meta.className}.${meta.method.name}() - called with`, ...meta.method.args);
		}
	}
	after(meta: Metadata): void {
		if (meta.woveMetadata.debug) {
			console.log(`${meta.className}.${meta.method.name}() - resulted in`, meta.method.result);
		}
	}

	@beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
	beforeMethod(meta: Metadata) {
		this.before(meta);
	};
	@beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
	beforeStaticMethod(meta: Metadata) {
		this.before(meta);
	};
	@beforeSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
	beforeSetter(meta: Metadata) {
		this.before(meta);
	};
	@beforeGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
	beforeGetter(meta: Metadata) {
		this.before(meta);
	};

	@afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
	afterMethod(meta: Metadata) {
		this.after(meta);
	};
	@afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
	afterStaticMethod(meta: Metadata) {
		this.after(meta);
	};
	@afterSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
	afterSetter(meta: Metadata) {
		this.after(meta);
	};
	@afterGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
	afterGetter(meta: Metadata) {
		this.after(meta);
	};
};
