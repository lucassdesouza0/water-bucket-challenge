/**
 * Calculates the greatest common divisor (GCD) of two numbers, `a` and `b`.
 * The calculation is done using the Euclidean algorithm, with an additional
 * optional limit to stop the recursion if the second number `b` becomes
 * less than or equal to this limit.
 *
 * @param a The first number.
 * @param b The second number.
 * @param limit (optional) The threshold value at which the recursion stops.
 * @returns The greatest common divisor of `a` and `b`, unless `b` falls below the limit,
 *          in which case `a` is returned.
 */

export default function greatCommomDivisor(
	a: number,
	b: number,
	limit: number = 0
): number {
	return b <= limit ? a : greatCommomDivisor(b, a % b);
}
