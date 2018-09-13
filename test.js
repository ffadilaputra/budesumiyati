import test from 'ava'
import x from './'

test('Ngetes Quotes',t => {
	t.true(x.all.length > 0)
	t.truthy(x.random())
	t.not(x.random(),x.random())
	t.is(x.all[0],'Rampung lunch lanjut ngumbahi')
	t.is(x.all[1],'Energen kapan bikin yang rasa indomie goreng')
})
